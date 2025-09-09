import React, { useRef } from 'react';
import ContactSection from '../Components/ContsctSection';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const heroRef = useRef(null),
        formRef = useRef(null),
        mapRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true }),
        formInView = useInView(formRef, { once: true }),
        mapInView = useInView(mapRef, { once: true });

  return (
    <div>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-lg font-semibold tracking-widest text-gray-200">AMBED</span>
            <div className="w-4 h-4 rotate-45 bg-gray-200" />
            <span className="text-lg font-semibold tracking-widest text-gray-200">Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">Contact With Us</h1>
          <p className="max-w-2xl mx-auto text-md sm:text-lg md:text-xl text-gray-300">
            At AMBED, we believe in blending creativity and innovation to deliver unforgettable experiences.
            Learn more about who we are and what drives our mission forward.
          </p>
        </motion.div>
      </section>

      {/* CONTACT FORM */}
      <section ref={formRef} className="py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <ContactSection />
        </motion.div>
      </section>

      {/* LOCATION MAP */}
      <section ref={mapRef} className="py-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={mapInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="p-4 h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            title="Hisar Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.3352878435834!2d75.72495001503016!3d29.149190982107503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910a5c6c2d21b53%3A0x7d6a0e2244a3e6b6!2sHisar%2C%20Haryana%20125001%2C%20India!5e0!3m2!1sen!2sus!4v1694030000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
