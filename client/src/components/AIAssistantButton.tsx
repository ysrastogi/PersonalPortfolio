import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIAssistantButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 bg-white w-72 rounded-lg shadow-lg p-4 mb-2"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-start mb-3">
              <div className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">AI Assistant</h4>
                <p className="text-sm text-neutral-600">Ready to help with your AI project</p>
              </div>
            </div>
            <p className="text-neutral-700 text-sm mb-3">
              Need help with AI integration? Let's discuss how AI can transform your business.
            </p>
            <div className="flex justify-end space-x-2">
              <a 
                href="#contact" 
                className="text-primary hover:text-primary/80 font-medium text-sm transition"
                onClick={toggleOpen}
              >
                Contact Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-primary text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          rotate: isOpen ? 45 : 0 
        }}
        transition={{ 
          type: "spring",
          stiffness: 260, 
          damping: 20 
        }}
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {!isOpen ? (
            <i className="fas fa-robot text-xl"></i>
          ) : (
            <i className="fas fa-times text-xl"></i>
          )}
          
          {/* Animated ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
        </div>
      </motion.button>
    </div>
  );
}