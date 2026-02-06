import React, { useState } from 'react';
import { Heart, Stars } from 'lucide-react';
import { motion } from 'framer-motion';
import LoveLetter from './components/LoveLetter';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    setNoBtnPosition({ x, y });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-romantic-50 to-romantic-100">
      <FloatingHearts />
      
      <main className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/50 backdrop-blur-sm rounded-full mb-6 shadow-sm">
            <Stars className="w-5 h-5 text-romantic-400 mr-2" />
            <span className="text-romantic-600 font-medium tracking-wide text-sm uppercase">Happy Valentine's Day</span>
            <Stars className="w-5 h-5 text-romantic-400 ml-2" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 tracking-tight">
            To My <span className="text-romantic-500 inline-block animate-pulse-slow">Bubu</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-lg mx-auto leading-relaxed">
            Khushi, you are the beat in my heart and the smile on my face.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-2xl font-medium text-gray-700">Will you be my Valentine?</h2>
          
          <div className="flex items-center gap-8 relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLetterOpen(true)}
              className="px-8 py-3 bg-romantic-500 text-white rounded-full font-semibold shadow-lg hover:bg-romantic-600 transition-colors flex items-center gap-2"
            >
              <Heart className="w-5 h-5 fill-current" />
              Yes, I will!
            </motion.button>

            <motion.button
              animate={noBtnPosition}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className="px-8 py-3 bg-gray-200 text-gray-600 rounded-full font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
            >
              No
            </motion.button>
          </div>
        </motion.div>
      </main>

      <LoveLetter isOpen={isLetterOpen} onClose={() => setIsLetterOpen(false)} />
      
      <footer className="absolute bottom-6 text-center text-gray-400 text-sm z-10">
        <p>Made with ❤️ for Khushi</p>
      </footer>
    </div>
  );
}

export default App;
