import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const totalSlides = 3; // total number of slides

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((current + 1) % totalSlides);
    const prev = () => setCurrent((current - 1 + totalSlides) % totalSlides);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* ---------------- SLIDE 1 ---------------- */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    current === 0 ? "opacity-100" : "opacity-0"
                }`}
            >
                <img
                    src="/assets/images/home/Asset 4.png"
                    alt="Building Landmarks"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-amber-950/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-amber-950/80 to-transparent" />
                <div className="absolute inset-0  flex items-center flex-col justify-end pb-24">
                    <div className="text-center text-white px-4 max-w-5xl">
                        <h1 className="text-5xl md:text-7xl newF  mb-6 animate-fade-in">
                            Building Landmarks
                        </h1>
                        <p className="text-lg md:text-2xl tracking-widest animate-fade-in-delay">
                            THAT RISE FROM AMBITION AND ENDURE THROUGH
                            EXCELLENCE
                        </p>
                    </div>
                </div>
            </div>

            {/* ---------------- SLIDE 2 ---------------- */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    current === 1 ? "opacity-100" : "opacity-0"
                }`}
            >
                <img
                    src="/assets/images/home/Asset 32.png"
                    alt="Crafting Dream Homes"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-amber-950/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-950/80 to-transparent" />

                <div className="absolute inset-0  flex items-center flex-col justify-center pb-24">
                    <div className=" w-full h-full flex items-center  justify-center  ">
                        <img
                            src="/assets/images/home/Asset 7.png"
                            alt="Logo Accent"
                            className="mt-24"
                        />
                    </div>
                    <div className="text-center w-full h-full flex items-center flex-col justify-end text-white px-4 max-w-5xl">
                        <h1 className="text-5xl md:text-7xl newF mb-6 animate-fade-in">
                            Building Icons
                        </h1>
                        <p className="text-lg md:text-2xl tracking-widest  animate-fade-in-delay">
                            THROUGH TIMELESS DESIGN AND SUSTAINABLE INNOVATION
                        </p>
                    </div>
                </div>
            </div>

            {/* ---------------- SLIDE 3 ---------------- */}
            <div
                className={`absolute inset-0 transition-opacity duration-1000 ${
                    current === 2 ? "opacity-100" : "opacity-0"
                }`}
            >
                <img
                    src="/assets/images/home/Asset 31.png"
                    alt="Excellence in Construction"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-amber-950/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-amber-950/60 to-transparent" />
                <div className="absolute inset-0 bg-black/30 flex items-center flex-col justify-end pb-24">
                    <div className="text-center text-white px-4 ">
                        <h1 className="text-5xl md:text-7xl newF mb-6 animate-fade-in">
                            Creating Communities
                        </h1>
                        <p className="text-lg md:text-2xl tracking-widest animate-fade-in-delay">
                            A PLACE WHERE FAMILIES GROW, FRIENDSHIPS FLOURISH, &
                            MEMORIES LAST A LIFETIME
                        </p>
                    </div>
                </div>
            </div>

            {/* ---------- Navigation Arrows ---------- */}
            <button
                onClick={prev}
                className="absolute left-1 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 group z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={next}
                className="absolute right-1 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-200 group z-10"
                aria-label="Next slide"
            >
                <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* ---------- Dots Indicator ---------- */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {[0, 1, 2].map((idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            idx === current
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* ---------- WhatsApp Button ---------- */}
            <button className="fixed bottom-36 right-6  shadow-2xl transition-all duration-200 z-40 hover:scale-110">
                <img src="/assets/images/home/Asset 30.png" alt="" />
            </button>
            <button className="fixed bottom-20 right-6 shadow-2xl transition-all duration-200 z-40 hover:scale-110">
                <img src="/assets/images/home/whatsapp.png" alt="" />
            </button>

            {/* ---------- Chat Button ---------- */}
            <button className="fixed bottom-6 right-6  shadow-2xl transition-all duration-200 z-40 hover:scale-110">
                <img src="/assets/images/home/Asset 3.png" alt="" />
            </button>

            {/* ---------- Animation Styles ---------- */}
            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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

export default HeroSlider;
