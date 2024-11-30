import React, { useState, useEffect } from "react";
import t1 from '../../assets/testimonials/testimonial1.png'
import t2 from '../../assets/testimonials/testimonial2.png'
import t3 from '../../assets/testimonials/testimonial3.mp4'
import t4 from '../../assets/testimonials/testimonial4.png'
import t5 from '../../assets/testimonials/testimonial5.png'
import t6 from '../../assets/testimonials/testimonial6.png'
import t7 from '../../assets/testimonials/testimmonil7.mp4'
import t8 from '../../assets/testimonials/testimonial8.png'
import t9 from '../../assets/testimonials/testimonial9.png'






const testimonials = [
  {
    id: 1,
    media: { type: "image", url: t1 },
  },
  {
    id: 2,
    media: { type: "image", url: t2 },
  },
  {
    id: 3,
    media: { type: "video", url: t3},
  },
  {
    id: 4,
    media: { type: "image", url: t4 },
  },
  {
    id: 5,
    media: { type: "image", url: t5 },
  },
  {
    id: 6,
    media: { type: "image", url: t6 },
  },
  {
    id: 7,
    media: { type: "video", url: t7 },
  },  
  {
    id: 8,
    media: { type: "image", url: t8 },
  },
 
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // Default to 3 testimonials

  // Update the number of visible testimonials based on screen size
  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      setVisibleCount(1); // Show 1 testimonial on small screens
    } else {
      setVisibleCount(3); // Show 3 testimonials on larger screens
    }
  };

  useEffect(() => {
    // Run once to set the initial visible count
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleTestimonials = () => {
    const len = testimonials.length;
    return Array.from({ length: visibleCount }, (_, i) =>
      testimonials[(currentIndex + i) % len]
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#0b57ff] text-white py-10 px-4 mt-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Testimonials
      </h1>
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Testimonial Slider */}
        <div
          className={`grid transition-transform duration-500 ease-in-out ${
            visibleCount === 1 ? "grid-cols-1" : "grid-cols-3 gap-4"
          }`}
        >
          {getVisibleTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-blue-800 shadow-lg p-6 flex flex-col items-center"
            >{
                testimonial.media.type === 'image'?
            <img src={testimonial.media.url}></img> :
            <video controls
            playsInline>
                <source src={testimonial.media.url} type="video/mp4"/>
               </video>
            }
            </div>
                
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Navigation Arrows */}
      
      
      </div>
    </div>
  );
};

export default TestimonialSlider;
