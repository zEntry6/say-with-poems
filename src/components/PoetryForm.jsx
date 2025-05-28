import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';
import { addPoetry } from '../services/firebase';

const PoetryForm = ({ onPoetryAdded }) => {
  const [formData, setFormData] = useState({
    senderName: '',
    recipientName: '',
    title: '',
    content: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.content.trim()) {
      showNotification('A poem, even in silence, must carry something.', 'error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await addPoetry({
        senderName: formData.senderName.trim() || 'Anonymous',
        recipientName: formData.recipientName.trim() || 'To whoever finds these words.',
        title: formData.title.trim() || 'Untitled',
        content: formData.content.trim(),
        message: formData.message.trim()
      });

      if (result.success) {
        showNotification('The verse has found its way to the stars ✨');
        setFormData({
          senderName: '',
          recipientName: '',
          title: '',
          content: '',
          message: ''
        });
        if (onPoetryAdded) {
          onPoetryAdded();
        }
      } else {
        showNotification('Glitched. Frozen. A life buffering between almost and never.', 'error');
      }
    } catch (error) {
      showNotification('Glitched. Frozen. A life buffering between almost and never.', 'error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {notification && (
        <div className={`mb-6 p-4 rounded-lg text-center fade-in ${
          notification.type === 'error' 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <input
              type="text"
              name="senderName"
              value={formData.senderName}
              onChange={handleChange}
              required
              placeholder="Name of the sender"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <input
              type="text"
              name="recipientName"
              value={formData.recipientName}
              onChange={handleChange}
              required
              placeholder="For the one meant to read"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="The Name of a Poem"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Poetry
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            placeholder="Here is where your poem waits to be born...

Let words pour forth, as rivers to their sea,
As wandering winds that tales to branches tell,
As hearts that murmur truths none else can see,
In silent shades where unmarked feelings dwell."
            className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all poetry-text"
            rows="8"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
          A Quiet Afterword
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="a little message"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
            rows="3"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader className="w-4 h-4 mr-2 animate-spin" />
                Releasing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Released To The Cosmos
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PoetryForm;