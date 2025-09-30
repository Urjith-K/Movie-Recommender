'use client'
import { useState, useEffect, useRef } from 'react'

const quotes = [
  { text: "May the Force be with you.", author: "Star Wars (1977)" },
  { text: "Here's looking at you, kid.", author: "Casablanca (1942)" },
  { text: "Frankly, my dear, I don't give a damn.", author: "Gone with the Wind (1939)" },
  { text: "I'm going to make him an offer he can't refuse.", author: "The Godfather (1972)" },
  { text: "You talkin' to me?", author: "Taxi Driver (1976)" },
  { text: "There's no place like home.", author: "The Wizard of Oz (1939)" },
  { text: "The first rule of Fight Club is: You do not talk about Fight Club.", author: "Fight Club (1999)" },
  { text: "To infinity and beyond!", author: "Toy Story (1995)" },
  { text: "Life is like a box of chocolates, you never know what you're gonna get.", author: "Forrest Gump (1994)" },
  { text: "Houston, we have a problem.", author: "Apollo 13 (1995)" },
];

export default function QuoteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      // This effect will trigger a re-render and apply the new transform/opacity
      // We don't need to manually scroll here, as the CSS transition handles it.
    }
  }, [currentIndex]);

  return (
    <section className="w-full max-w-3xl mx-auto mt-12 p-8 bg-white/5 rounded-lg shadow-lg relative overflow-hidden h-48 flex items-center justify-center">
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 text-center flex flex-col justify-center items-center p-4"
            style={{
              opacity: index === currentIndex ? 1 : 0.4,
              transition: 'opacity 1000ms ease-in-out',
            }}
          >
            <p className="text-2xl font-bold italic mb-2">"{quote.text}"</p>
            <p className="text-lg text-zinc-300">- {quote.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
