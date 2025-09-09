import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const slides = [
  {
    title: 'Perfect Wallpapers For The Room',
    subtitle: 'Welcome to Ambed',
    buttonText: 'Discover More',
    image: 'https://images.pexels.com/photos/2319419/pexels-photo-2319419.jpeg',
  },
  {
    title: 'Stylish Wallpaper Solutions',
    subtitle: 'Your Dream Space',
    buttonText: 'Explore Now',
    image: 'https://images.pexels.com/photos/15575713/pexels-photo-15575713.png',
  },
  {
    title: 'Modern Designs for Every Wall',
    subtitle: 'Quality & Elegance',
    buttonText: 'Get Started',
    image: 'https://images.pexels.com/photos/7535023/pexels-photo-7535023.jpeg',
  },
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out transform ${
            index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#2E2824]/70"></div>

          {/* Content */}
          {index === current && (
            <div className="relative z-20  h-full flex justify-start px-6  sm:px-10 max-w-7xl mx-auto items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white space-y-6 max-w-xl"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="uppercase text-sm sm:text-base text-[#A47C68] font-extrabold tracking-widest"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="uppercase text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="group relative border-l-8 border-[#A47C68] bg-white text-[#2e2824] hover:bg-[#A87B65] hover:text-white transition-all duration-300 px-6 py-3 font-semibold uppercase text-sm overflow-hidden"
                >
                  {slide.buttonText}
                  <span className="absolute bottom-0  left-0 w-full h-[3px] bg-[#A87B65] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </motion.button>
              </motion.div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 text-white bg-[#00000050] hover:bg-[#A47C68] p-3 rounded-full transition duration-300"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 text-white bg-[#00000050] hover:bg-[#A47C68] p-3 rounded-full transition duration-300"
      >
        <FaChevronRight />
      </button>
    </section>
  );
};

export default HomeHero;
