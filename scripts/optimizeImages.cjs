const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImage(filePath) {
  const originalBuffer = fs.readFileSync(filePath);
  const originalSize = originalBuffer.length;
  const ext = path.extname(filePath).toLowerCase();

  try {
    const metadata = await sharp(originalBuffer).metadata();

    let pipeline = sharp(originalBuffer);

    // Resize if excessively large for web display
    if (metadata.width && metadata.width > 1600) {
      pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
    }

    let buffer;
    if (ext === '.png') {
      buffer = await pipeline
        .png({
          quality: 80,
          compressionLevel: 9,
          effort: 8,
          palette: true
        })
        .toBuffer();
    } else if (ext === '.jpg' || ext === '.jpeg') {
      buffer = await pipeline
        .jpeg({
          quality: 80,
          mozjpeg: true
        })
        .toBuffer();
    } else if (ext === '.webp') {
      buffer = await pipeline
        .webp({
          quality: 80,
          effort: 6
        })
        .toBuffer();
    } else {
      return { skipped: true };
    }

    // Only overwrite if the optimized buffer is actually smaller
    if (buffer.length < originalSize) {
      fs.writeFileSync(filePath, buffer);
      return {
        path: filePath,
        originalSize,
        newSize: buffer.length,
        saved: originalSize - buffer.length
      };
    } else {
      return {
        path: filePath,
        originalSize,
        newSize: originalSize,
        saved: 0
      };
    }
  } catch (err) {
    console.error(`Error optimizing ${filePath}:`, err.message);
    return { error: true, path: filePath, originalSize, newSize: originalSize, saved: 0 };
  }
}

async function run() {
  console.log('🚀 Starting safe in-memory image optimization...\n');
  const files = [];

  function collect(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      if (item === 'node_modules' || item === '.git' || item === 'dist' || item === 'scripts') continue;
      const full = path.join(dir, item);
      const s = fs.statSync(full);
      if (s.isDirectory()) {
        collect(full);
      } else if (/\.(png|jpg|jpeg|webp)$/i.test(item)) {
        files.push(full);
      }
    }
  }

  collect('public');
  if (fs.existsSync('photo.png')) files.push('photo.png');

  let totalOriginal = 0;
  let totalNew = 0;

  for (const f of files) {
    const res = await optimizeImage(f);
    if (res && res.originalSize) {
      totalOriginal += res.originalSize;
      totalNew += res.newSize;
      const pct = res.originalSize > 0 ? ((res.saved / res.originalSize) * 100).toFixed(1) : 0;
      console.log(
        `✓ ${f.padEnd(25)}: ${(res.originalSize / 1024).toFixed(0)} KB -> ${(res.newSize / 1024).toFixed(0)} KB (${pct}% saved)`
      );
    }
  }

  console.log('\n=======================================');
  console.log(`Original total size: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized total size: ${(totalNew / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total data saved:     ${((totalOriginal - totalNew) / (1024 * 1024)).toFixed(2)} MB (${(((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(1)}%)`);
  console.log('=======================================\n');
}

run();
