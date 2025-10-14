import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText = ({ text, className = '' }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentWordIndex < words.length) {
        setDisplayedText(prev => {
          const newText = prev ? prev + ' ' + words[currentWordIndex] : words[currentWordIndex];
          return newText;
        });
        setCurrentWordIndex(prev => prev + 1);
      } else {
        // Wait 5 seconds before restarting
        setTimeout(() => {
          setDisplayedText('');
          setCurrentWordIndex(0);
        }, 5000);
      }
    }, 300); // Speed of typing each word

    return () => clearInterval(interval);
  }, [currentWordIndex, words]);

  return (
    <span className={className}>
      {displayedText}
      <span className="inline-block w-0.5 h-8 md:h-12 lg:h-14 bg-primary ml-1 animate-pulse" />
    </span>
  );
};

export default TypewriterText;
