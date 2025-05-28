import React from 'react';
import { Calendar } from 'lucide-react';
import HighlightText from './HighlightText';

const PoetryCard = ({ poem, searchTerm }) => {
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    
    let date;
    if (timestamp.seconds) {
      // Firestore timestamp
      date = new Date(timestamp.seconds * 1000);
    } else if (timestamp.toDate) {
      // Firestore timestamp object
      date = timestamp.toDate();
    } else {
      // Regular timestamp
      date = new Date(timestamp);
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white border border-gray-100 shadow-sm rounded-xl p-8 hover-lift fade-in">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-gray-50">
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          {poem.title}
        </h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 space-y-1 sm:space-y-0">
          <div className="flex items-center">
            <span className="font-medium">From:</span>
            <span className="ml-2">
              <HighlightText text={poem.senderName} searchTerm={searchTerm} />
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium">To:</span>
            <span className="ml-2">
              <HighlightText text={poem.recipientName} searchTerm={searchTerm} />
            </span>
          </div>
        </div>
      </div>

      {/* Poetry Content */}
      <div className="mb-6">
        <div className="poetry-text text-gray-800 text-lg leading-relaxed">
          {poem.content}
        </div>
      </div>

      {/* Additional Message */}
      {poem.message && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600 italic">
            "{poem.message}"
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className="flex items-center text-xs text-gray-400">
          <Calendar className="w-3 h-3 mr-1" />
          {formatDate(poem.createdAt || poem.timestamp)}
        </div>
        
        <div className="w-8 h-px bg-gray-200"></div>
      </div>
    </article>
  );
};

export default PoetryCard;