import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

interface UiverseSearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

export const UiverseSearchBar: React.FC<UiverseSearchBarProps> = ({
  placeholder = 'Search projects, services...',
  onSearch,
  className = '',
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className={`uiverse-search-container ${className}`}>
      <div id="poda">
        <div className="glow" />
        <div className="darkBorderBg" />
        <div className="white" />
        <div className="border" />

        <div id="main">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="input"
            autoComplete="off"
          />

          <div id="input-mask" />
          <div id="pink-mask" />

          <div className="filterBorder" />
          <button
            type="button"
            id="filter-icon"
            className="cursor-pointer hover:scale-105 transition-transform"
            title="Filter options"
          >
            <Filter className="w-3.5 h-3.5 text-white" />
          </button>

          <div id="search-icon">
            <Search className="w-4 h-4 text-slate-300" />
          </div>

          {value && (
            <button
              type="button"
              onClick={() => {
                setValue('');
                if (onSearch) onSearch('');
              }}
              className="absolute right-12 top-4.5 text-slate-400 hover:text-white p-1 rounded-full cursor-pointer z-10"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
