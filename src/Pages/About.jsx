import React, { useRef } from 'react';
import AboutKnow from '../Components/AboutKnow';
import AboutTestimonial from '../Components/AboutTestimonial';
import TeamMember from '../Components/TeamMember';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaPlay, FaCheck } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const features = [
  "High quality and modern designs",
  "Customer satisfaction guaranteed",
  "Eco-friendly materials used",
  "Affordable pricing with premium service",
];

  const images = [
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-4.png",
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-5.png",
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-1.png",
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-2.png",
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-3.png",
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-4.png"
  ];

  const heroRef = useRef(null), heroIn = useInView(heroRef, { once: true });
  const knowRef = useRef(null), knowIn = useInView(knowRef, { once: true });
  const brandsRef = useRef(null), brandsIn = useInView(brandsRef, { once: true });
  const testiRef = useRef(null), testiIn = useInView(testiRef, { once: true });
  const processRef = useRef(null), processIn = useInView(processRef, { once: true });
  const teamRef = useRef(null), teamIn = useInView(teamRef, { once: true });

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-lg font-semibold tracking-widest text-gray-200">AMBED</span>
            <div className="w-4 h-4 rotate-45 bg-gray-200" />
            <span className="text-lg font-semibold tracking-widest text-gray-200">ABOUT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">Discover Our Story</h1>
          <p className="max-w-2xl mx-auto text-md sm:text-lg md:text-xl text-gray-300">At AMBED… mission forward.</p>
        </motion.div>
      </section>

      {/* ABOUT KNOW */}
      <section ref={knowRef} className="py-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={knowIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <AboutKnow />
        </motion.div>
      </section>

      {/* BRANDS */}
      <section ref={brandsRef} className="bg-gray-100 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={brandsIn ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Trusted by More than <span className="text-[#A47C68] font-extrabold">8,800+</span> Top Brands
          </h2>
          <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={2} breakpoints={{640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}}} loop autoplay={{delay:2500,disableOnInteraction:false}} className="w-full">
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className="flex justify-center items-center">
                <img src={img} alt={`Brand ${idx}`} className="w-[120px] h-auto opacity-80 hover:opacity-100 transition" />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testiRef} className="py-16">
        <motion.div
          initial="hidden"
          animate={testiIn ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          <AboutTestimonial />
        </motion.div>
      </section>

      {/* PROCESS / FEATURES */}
      <section ref={processRef} className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={processIn ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row gap-16"
        >
          <div className="md:w-1/2">
            <button aria-label="Play Video" className="bg-[#a1745a] rounded-3xl w-24 h-24 flex items-center justify-center shadow-lg hover:scale-110 transition duration-300">
              <FaPlay className="text-white text-3xl ml-1" />
            </button>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-md mt-6">Leading in Interior <br /> Design Market</h1>
          </div>
          <div className="md:w-1/2 bg-white/20 rounded-xl p-10 backdrop-blur-md shadow-lg">
            <ul className="space-y-6 text-lg font-semibold text-[#f5f1eb]">
              {features.map((f,i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 20 }} animate={processIn ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 * i, duration: 0.6 }}
                  className="flex items-center gap-5"
                >
                  <FaCheck className="text-[#a1745a] text-xl flex-shrink-0" />{f}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* TEAM */}
      <section ref={teamRef} className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={teamIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <TeamMember />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
