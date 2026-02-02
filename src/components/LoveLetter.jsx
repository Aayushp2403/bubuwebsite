import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const LoveLetter = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50, scale: isOpen ? 1 : 0.9, pointerEvents: isOpen ? 'auto' : 'none' }}
      transition={{ duration: 0.5, type: 'spring', damping: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
    >
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        
        <div className="bg-romantic-100 p-8 text-center border-b border-romantic-200">
          <h2 className="text-3xl font-script text-romantic-700 mb-2 font-bold">My Dearest Khushi</h2>
          <p className="text-romantic-600 italic">"My Bubu, my love"</p>
        </div>

        <div className="p-8 space-y-4 text-gray-700 leading-relaxed font-serif max-h-[60vh] overflow-y-auto">
          <p>
            Happy Valentine's Day, my beautiful Khushi!
          </p>
          <p>
            Every moment with you feels like a dream I never want to wake up from. You bring so much joy, laughter, and warmth into my life.
          </p>
          <p>
            I call you Bubu because you are the cutest, most precious person to me. Thank you for being you and for choosing me.
          </p>
          <p>
            I love you more than words can express.
          </p>
          <p className="text-right font-bold text-romantic-600 mt-8">
            Forever Yours,<br/>
            Your Dudu
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoveLetter;
