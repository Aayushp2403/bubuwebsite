import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9);
      const startX = Math.random() * 100; // Percentage
      const size = Math.random() * 20 + 10; // 10px to 30px
      const duration = Math.random() * 5 + 5; // 5s to 10s

      setHearts((prev) => [
        ...prev,
        { id, startX, size, duration },
      ]);

      // Cleanup old hearts
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, duration * 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', x: `${heart.startX}vw`, opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 1, 1, 0],
            x: `${heart.startX + (Math.random() * 10 - 5)}vw`, // Slight drift
          }}
          transition={{ duration: heart.duration, ease: 'linear' }}
          className="absolute text-romantic-300"
          style={{ fontSize: `${heart.size}px` }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
