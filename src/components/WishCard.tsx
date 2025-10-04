import { Card } from '@/components/ui/card';

interface WishCardProps {
  title: string;
  message: string;
  onClick: () => void;
}

export const WishCard = ({ title, message, onClick }: WishCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className="p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-card/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 group"
    >
      <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all">
        {title}
      </h3>
    </Card>
  );
};
