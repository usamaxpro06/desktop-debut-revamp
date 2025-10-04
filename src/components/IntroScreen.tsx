import { useState, useEffect } from 'react';
import { TypingText } from './TypingText';
import introBg from '@/assets/intro-bg.jpg';

interface IntroScreenProps {
  messages: string[];
  onComplete: () => void;
}

export const IntroScreen = ({ messages, onComplete }: IntroScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleMessageComplete = () => {
    if (currentIndex < messages.length - 1) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 1000);
      }, 1500);
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: `url(${introBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="relative z-10 px-4">
        <TypingText
          key={currentIndex}
          text={messages[currentIndex]}
          speed={80}
          onComplete={handleMessageComplete}
          className="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl text-center max-w-4xl"
        />
      </div>
    </div>
  );
};
