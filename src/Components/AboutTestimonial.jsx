import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Kevin Martin",
    role: "Our Customer",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor to incidut labore et dolore magna for aliqua. Quis ipsum suspendisse."
  },
  {
    id: 2,
    name: "John Smith",
    role: "Our Customer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor to incidut labore et dolore magna for aliqua. Quis ipsum suspendisse."
  },
  {
    id: 3,
    name: "Sarah Albert",
    role: "Our Customer",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    text: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor to incidut labore et dolore magna for aliqua. Quis ipsum suspendisse."
  },
];

const AboutTestimonial = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="bg-[#f9f6f2] py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <p className="uppercase text-sm text-[#a17c63] font-semibold tracking-widest mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#332f2a] mb-2">
          What They Say?
        </h2>
        <div className="w-14 h-1 bg-[#a17c63] mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ id, name, role, img, text }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * index }}
            className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300"
          >
            {/* Quote Icon */}
            <div className="absolute -top-5 left-5 bg-[#dfd4cc] rounded-b-xl px-3 py-2 text-[#a17c63] text-xl font-bold">
              &#8220;&#8220;
            </div>

            {/* Testimonial Text */}
            <p className="text-[#7e7466] mb-6 leading-relaxed">{text}</p>

            <hr className="border-[#dfd4cc] mb-6" />

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <img
                src={img}
                alt={name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-[#332f2a]">{name}</h4>
                <p className="text-xs tracking-widest text-[#a17c63]">
                  {role.toUpperCase()}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutTestimonial;
