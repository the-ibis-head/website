import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

const texts = ['ith_', 'theibishead_'];

const quotes = [
  'Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler',
  'Simplicity is the soul of efficiency. – Austin Freeman',
  'Before software can be reusable it first has to be usable. – Ralph Johnson',
  'Make it work, make it right, make it fast. – Kent Beck',
];

export const Home: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [toggleCount, setToggleCount] = useState(0);

  useEffect(() => {
    const toggle = () => {
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % texts.length);
        setToggleCount((count) => count + 1);
      }, 3000);
    };
    const interval = setInterval(toggle, toggleCount < 2 ? 2000 : 10000);
    return () => clearInterval(interval);
  }, [toggleCount]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full text-center p-8 shadow-2xl rounded-2xl border">
        <h1 className="text-black dark:text-white font-bold text-6xl">
          TheIbisHead
        </h1>
        <p className="text-sm">Crafting clean, performant software solutions</p>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={quoteIndex}
            className="text-lg italic min-h-[100px] my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            “{quotes[quoteIndex]}”
          </motion.blockquote>
        </AnimatePresence>

        <p className="text-sm">&copy; 2025 — info@theibishead.com</p>
      </Card>
    </div>
  );
};
