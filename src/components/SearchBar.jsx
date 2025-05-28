import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onSearch, totalPoems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Debounce search untuk performance yang lebih baik
    const timer = setTimeout(() => {
      onSearch(searchTerm.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
    setIsActive(false);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    if (!searchTerm) {
      setIsActive(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <div className={`relative transition-all duration-300 ${
        isActive ? 'transform scale-105' : ''
      }`}>
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            isActive || searchTerm ? 'text-gray-600' : 'text-gray-400'
          }`} />
          
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Sender or receiver?"
            className={`w-full pl-12 pr-12 py-3 border rounded-full transition-all duration-300 focus:outline-none ${
              isActive || searchTerm 
                ? 'border-gray-400 bg-white shadow-md' 
                : 'border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300'
            }`}
          />
          
          {searchTerm && (
            <button
              onClick={handleClear}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        
        {/* Search hints */}
        {isActive && !searchTerm && (
          <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <p className="text-sm text-gray-600 mb-2">💡 Search tips:</p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Type the sender or recipient's name.</li>
              <li>• No full name needed.</li>
              <li>• Example: "mom", "shark", "anne"</li>
            </ul>
          </div>
        )}
        
        {/* Search results count */}
        {searchTerm && (
          <div className="mt-2 text-center">
            <p className="text-sm text-gray-500">
              {totalPoems === 0 
                ? `There was never a poem for "${searchTerm}"`
                : totalPoems === 1
                ? `1 poem found`
                : `${totalPoems} poems, discovered in the quiet.`
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;