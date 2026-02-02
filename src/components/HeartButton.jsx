import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick && onClick();
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <motion.button
      className="relative flex items-center justify-center p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Heart
        className={`w-8 h-8 transition-colors duration-300 ${
          isHovered || isClicked ? 'fill-romantic-500 text-romantic-500' : 'text-romantic-400'
        }`}
      />
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-full border-2 border-romantic-400"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default HeartButton;
