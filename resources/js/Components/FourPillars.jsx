import React from 'react';
import { Lightbulb, Handshake, Users, Smile } from 'lucide-react';

export default function FourPillars() {
  const pillars = [
    {
      icon: '/assets/images/About Us/Asset 5.png',
      title: "INNOVATION & TRADITION",
      description: "We have an ability to keep up with current trends and meet modern demands through innovation has enabled us to acquire both the means and the trust necessary to preserve the most important aspects of our heritage.",
      bgColor: "bg-[#f2e4c7]"
    },
    {
      icon: '/assets/images/About Us/Asset 6.png',
      title: "INTEGRITY & TRANSPARENCY",
      description: "Integrity & Transparency, we believe, are essential components of prosperity. Although it is tough to quantify, yet it can be felt when it exists. Treating clients and employees with honesty, fairness, and respect are one of our key values.",
      bgColor: "bg-gray-100"
    },
    {
      icon: '/assets/images/About Us/Asset 3.png',
      title: "PASSION AT WORK",
      description: "Passion at work is not just a mere statement for us, it is our working culture. Every day, we endeavour to live it. It motivates us to offer you the best roducts and services.",
      bgColor: "bg-[#f2e4c7]"
    },
    {
      icon: '/assets/images/About Us/Asset 4.png',
      title: "CUSTOMER CENTRICITY",
      description: "\"Customer value and satisfaction form the foundation for the group's credibility and goodwill\". The LJK Group draws inspiration from its client's support and faith, to follow a morally dominant code of conduct.",
      bgColor: "bg-gray-100"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12  bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500] newF bg-gradient-to-r mb-12 from-[#9c7948] via-[#e2b06a] to-[#fcc06c] bg-clip-text text-transparent text-center">
          Four Pillars of LJK Group
        </h1>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.bgColor} p-8 sm:p-10 flex flex-col items-start justify-start min-h-[400px] sm:min-h-[450px] transition-transform `}
            >
              {/* Icon */}
              <div className="mb-6">
                <img src={pillar.icon} alt="" />
              </div>

              {/* Title */}
              <h2 className="text-lg  w-4/5 font-bold text-[#2D1C11] mb-4 tracking-wide">
                {pillar.title}
              </h2>

              {/* Description */}
              <p className="text-sm r-m text-[#2D1C11] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}