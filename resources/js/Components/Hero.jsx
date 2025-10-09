import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
  
    const slides = [
      {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
        title: "Building Landmarks",
        subtitle: "THAT RISE FROM AMBITION AND ENDURE THROUGH EXCELLENCE"
      },
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
        title: "Crafting Dream Homes",
        subtitle: "WHERE QUALITY MEETS INNOVATION IN EVERY DETAIL"
      },
      {
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
        title: "Excellence in Construction",
        subtitle: "DELIVERING ARCHITECTURAL MASTERPIECES WITH PRECISION"
      }
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
  
      return () => clearInterval(timer);
    }, []);
  
    const next = () => setCurrent((current + 1) % slides.length);
    const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  
    return (
      <div className="relative h-screen w-full overflow-hidden">
        {/* Slides */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Top vignette */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-950/60 to-transparent" />
            
            {/* Bottom vignette */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-950/60 to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-5xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl tracking-wider font-light animate-fade-in-delay">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
  
        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </button>
  
        <button
          onClick={next}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 group z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </button>
  
        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
  
        
  
        {/* WhatsApp button */}
        <button className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-2xl transition-all duration-200 z-40 hover:scale-110">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
  
        {/* Chat button */}
        <button className="fixed bottom-6 right-6 bg-amber-900 hover:bg-amber-800 rounded-full p-4 shadow-2xl transition-all duration-200 z-40 hover:scale-110">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
  
        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
  
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
  
          .animate-fade-in-delay {
            opacity: 0;
            animation: fade-in 0.8s ease-out 0.3s forwards;
          }
        `}</style>
      </div>
    );
  };

  export default HeroSlider