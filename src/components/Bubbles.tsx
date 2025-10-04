import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: number;
  size: number;
  color: string;
  duration: number;
}

export const Bubbles = ({ active = false }: { active?: boolean }) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    if (!active) {
      setBubbles([]);
      return;
    }

    const colors = [
      'hsl(var(--bubble-1))',
      'hsl(var(--bubble-2))',
      'hsl(var(--bubble-3))',
      'hsl(var(--bubble-4))',
      'hsl(var(--bubble-5))',
    ];

    const interval = setInterval(() => {
      const newBubble: Bubble = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 50 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 3 + Math.random() * 2,
      };

      setBubbles(prev => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
      }, newBubble.duration * 1000);
    }, 200);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-bubble"
          style={{
            left: `${bubble.left}%`,
            bottom: '-50px',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
            opacity: 0.6,
            animation: `rise ${bubble.duration}s linear`,
          }}
        />
      ))}
      <style>{`
        @keyframes rise {
          to {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
