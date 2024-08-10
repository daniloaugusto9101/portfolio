// components/RecommendationCarousel.js
'use client';

import { useState } from 'react';

export default function RecommendationItem({ recommendations }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-md bg-gray-100 p-4 shadow-md">
      <div
        className="flex h-full transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {recommendations.map((recommendation, index) => (
          <div key={index} className="flex w-full flex-shrink-0 items-stretch justify-center p-10">
            <div className="flex max-w-xl flex-col justify-center text-center">
              <p className="text-md mb-5 mt-2 text-gray-700">{recommendation.comment}</p>
              <h3 className="text-xl font-semibold">{recommendation.name}</h3>
              <p className="text-gray-500">{recommendation.position}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-50 p-4 text-white"
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-50 p-4 text-white"
        onClick={nextSlide}
      >
        &#8250;
      </button>
    </div>
  );
}
