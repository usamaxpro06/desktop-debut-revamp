import { useState, useEffect } from 'react';
import { IntroScreen } from '@/components/IntroScreen';
import { WishCard } from '@/components/WishCard';
import { WishDetail } from '@/components/WishDetail';
import bg1 from '@/assets/birthday-bg-1.jpg';
import bg2 from '@/assets/birthday-bg-2.jpg';
import bg3 from '@/assets/birthday-bg-3.jpg';

const introMessages = [
  "Hi Zoha!",
  "Zada kuch nahi ha!",
  "Bas yahi tha toh naraz mat hona!",
  "Hehehehehehehehe!",
  "Wish sa phly ya bata thek to ha na?",
  "Each wish is special for my bestie",
  "Welcome to the Birthday Celebration!"
];

const wishes = [
  {
    title: "Manhoos Esa Kesy",
    message: "Happy birthday to the one who always lifts my spirits. Cheers to many more years of laughter and good times together!"
  },
  {
    title: "Ya Wala Nahi",
    message: "Wishing you a day filled with love, cake, joy, and all the other wonderful things you deserve. Have a great birthday, Zoha."
  },
  {
    title: "Shyad Open Na Ho",
    message: "On your special day, I want to take a moment to let you know how much I cherish our friendship. Happy birthday to someone who brings so much warmth into my life."
  },
  {
    title: "Esa Rahna Do",
    message: "Cheers to another year of shared memories, unforgettable adventures, and endless laughter. Happy birthday, my ova!"
  },
  {
    title: "Tumra Liya Thori Ha",
    message: "Wishing you a fabulous birthday surrounded by love, joy, and all the things that make you smile. You deserve everything wonderful today and always."
  },
  {
    title: "Nahi Bilkul Nahi Open Krna",
    message: "Wishing a happy, happy birthday to my sunshine and bestie. The world is a brighter, better place with you in it. Enjoy your special day."
  },
  {
    title: "Es Ke Ijzat Ha",
    message: "Happy birthday! Remember, you're not 40, you're 18 with 22 years of experience."
  },
  {
    title: "Es ke Ijazt Nahi",
    message: "Wishing you a day as bright as your smile, as wild as your spirit, and as funny as your jokes. Happy birthday, my incredibly entertaining bestie!"
  },
  {
    title: "Q Bhae Mat Kholo",
    message: "On your birthday, I want to remind you of how incredible and strong you are. Here's to another year of growth and grace. Happy birthday!"
  },
  {
    title: "Ab Sare Open Kr Le Esa Bee Kr Lo",
    message: "Es ma kuch bee nahi ha. Manhoos Zalil Happy Birthday. Or bhae Ya sab hota rah ga mere treat? Shyad tujha psnd na aya ho wish k trka toh sorry!"
  }
];

const backgrounds = [bg1, bg2, bg3];

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedWish, setSelectedWish] = useState<string | null>(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!showIntro && !selectedWish) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showIntro, selectedWish]);

  useEffect(() => {
    if (!showIntro) {
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroScreen messages={introMessages} onComplete={handleIntroComplete} />;
  }

  if (selectedWish) {
    return <WishDetail message={selectedWish} onBack={() => setSelectedWish(null)} />;
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgrounds[currentBgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 backdrop-blur-sm" />
      
      <div className={`relative z-10 w-full max-w-4xl space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white drop-shadow-2xl animate-float" style={{ fontFamily: "'Playfair Display', serif" }}>
          Happy Birthday! 🎉
        </h1>
        
        <div className="bg-card/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {wishes.map((wish, index) => (
              <WishCard
                key={index}
                title={wish.title}
                message={wish.message}
                onClick={() => setSelectedWish(wish.message)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
