import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Bubbles } from './Bubbles';
import bg3 from '@/assets/birthday-bg-3.jpg';

interface WishDetailProps {
  message: string;
  onBack: () => void;
}

export const WishDetail = ({ message, onBack }: WishDetailProps) => {
  return (
    <div 
      className="fixed inset-0 z-40 flex flex-col items-center justify-center p-4 md:p-8"
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/40 backdrop-blur-sm" />
      <Bubbles active={true} />
      
      <div className="relative z-10 max-w-3xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-relaxed px-4">
          {message}
        </h1>
        
        <Button 
          onClick={onBack}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:scale-105 transition-all duration-300 font-semibold px-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go Back
        </Button>
      </div>
    </div>
  );
};
