import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center py-16 px-4 border-b border-gray-100">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Heart className="w-8 h-8 text-gray-600 mr-3" />
          <h1 className="text-4xl font-light text-gray-800 tracking-wide">
            Say With Poems
          </h1>
        </div>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
        The silence where unspoken words rest.
        </p>
        
        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
        
        <p className="text-sm text-gray-500 mt-6 italic">
            "A poem is but a sorrow folded in stanzas, cast adrift without an address,
            praying to be cradled by the heart it once dreamed of."
        </p>
      </div>
    </header>
  );
};

export default Header;
