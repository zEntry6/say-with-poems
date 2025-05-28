import React, { useState } from 'react';
import Header from './components/Header';
import PoetryForm from './components/PoetryForm';
import PoetryGallery from './components/PoetryGallery';
import './styles/globals.css';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handlePoetryAdded = () => {
    // Trigger refresh of the gallery
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Poetry Form Section */}
        <section className="border-b border-gray-100">
          <PoetryForm onPoetryAdded={handlePoetryAdded} />
        </section>
        
        {/* Poetry Gallery Section */}
        <PoetryGallery refreshTrigger={refreshTrigger} />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-px bg-gray-300 mx-auto mb-4"></div>
          <p className="text-sm text-gray-500">
          For the ones who still believe that words can hold the weight of the world — made with ♥
          </p>
          <p className="text-xs text-gray-400 mt-2">
          Each poem is a bridge where souls may meet, betwixt thy heart and mine.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
