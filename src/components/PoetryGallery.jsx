import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen, Loader, RefreshCw } from 'lucide-react';
import { getAllPoetry } from '../services/firebase';
import PoetryCard from './PoetryCard';
import SearchBar from './SearchBar';

const PoetryGallery = ({ refreshTrigger }) => {
  const [allPoems, setAllPoems] = useState([]);
  const [filteredPoems, setFilteredPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter poems based on search term
  const filterPoems = useCallback((poems, term) => {
    if (!term) return poems;
    
    const searchLower = term.toLowerCase();
    return poems.filter(poem => 
      poem.senderName.toLowerCase().includes(searchLower) ||
      poem.recipientName.toLowerCase().includes(searchLower)
    );
  }, []);

  // Handle search
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    const filtered = filterPoems(allPoems, term);
    setFilteredPoems(filtered);
  }, [allPoems, filterPoems]);

  const loadPoetry = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await getAllPoetry();
      if (result.success) {
        setAllPoems(result.poems);
        const filtered = filterPoems(result.poems, searchTerm);
        setFilteredPoems(filtered);
      } else {
        setError('The poems refused to arrive.');
      }
    } catch (err) {
      setError('Unable to carry the weight of verses.');
    }
    
    setLoading(false);
  };

  useEffect(() => {
    loadPoetry();
  }, [refreshTrigger]);

  const handleRefresh = () => {
    loadPoetry();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <Loader className="w-8 h-8 text-gray-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Collecting quiet poems from the dark...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <p className="text-gray-500 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="inline-flex items-center px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Give It One More Try
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-gray-600 mr-2" />
            <h2 className="text-2xl font-light text-gray-800">
            The Room of Poems
            </h2>
          </div>
          
          <p className="text-gray-500 mb-6">
            {searchTerm 
              ? `Search results for "${searchTerm}"`
              : 'These words, once lost in the wind, have found their home in this quiet heart.'
            }
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-px bg-gray-300"></div>
            <button
              onClick={handleRefresh}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
              title="Reload"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar 
          onSearch={handleSearch} 
          totalPoems={filteredPoems.length}
        />

        {/* Poetry Grid */}
        {filteredPoems.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                {searchTerm ? 'Left with Nothing.' : 'A Poem, Not Yet Born'}
              </h3>
              <p className="text-gray-500">
                {searchTerm 
                  ? `No poem was found to echo the longing behind "${searchTerm}"`
                  : 'Let your words be the first light to enter this quiet room.'
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => handleSearch('')}
                  className="mt-4 text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  Explore All Poems
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPoems.map((poem) => (
              <PoetryCard 
                key={poem.id} 
                poem={poem} 
                searchTerm={searchTerm}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PoetryGallery;