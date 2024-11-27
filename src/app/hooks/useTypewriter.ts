import { useState, useEffect } from 'react';

export const useTypewriter = (words: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const type = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      if (shouldDelete) {
        setText(prev => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    };

    const timeoutId = setTimeout(
      type,
      isDeleting ? deletingSpeed : isPaused ? pauseTime : typingSpeed
    );

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, isPaused, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};
