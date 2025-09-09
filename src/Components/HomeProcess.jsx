import React, { useRef } from 'react';
import { FaPlay, FaCheck, FaClipboardList, FaUserTie, FaScroll } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const HomeProcess = () => {
  const features = [
    "We’re expert & certified designers",
    "We use only quality materials",
    "We care about our customers",
    "Smart & unique wall designs",
  ];

  const processRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 });

  const interiorRef = useRef(null);
  const isInteriorInView = useInView(interiorRef, { once: true, amount: 0.2 });

  const Card = ({ id, icon, title, text, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative bg-[#f1ede9] rounded-3xl p-8 max-w-sm border-t-2 border-l-2 border-[#a1745a] shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Number box */}
      <div className="absolute -top-6 -left-6 bg-[#3a322f] w-14 h-14 rounded-tr-2xl rounded-br-2xl flex items-center justify-center text-white font-bold text-lg z-10 select-none">
        {id}
      </div>

      {/* Vertical and horizontal lines */}
      <div className="absolute top-4 left-4 w-1 h-16 bg-[#a1745a]" />
      <div className="absolute top-4 left-16 w-24 h-1 bg-[#a1745a]" />

      {/* Icon */}
      <div className="absolute top-6 right-6 text-[#a1745a]">{icon}</div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-[#3a322f] mb-4">{title}</h3>
      <p className="text-[#857b75] leading-relaxed">{text}</p>
    </motion.div>
  );

  const cardData = [
    {
      id: "01",
      icon: <FaClipboardList size={28} />,
      title: "Request Your Service",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: "02",
      icon: <FaUserTie size={28} />,
      title: "Meet with Our Experts",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      id: "03",
      icon: <FaScroll size={28} />,
      title: "Enjoy Your New Wall Look",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/project-two-bg-1-2.jpg')" }}>
      
      {/* Work Process Section */}
      <section ref={processRef} className="py-20 px-6 bg-white bg-opacity-95 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center mb-14"
        >
          <p className="uppercase text-sm text-[#a1745a] font-semibold mb-2 tracking-widest">3 EASY STEPS</p>
          <h2 className="text-4xl font-extrabold text-[#3a322f] leading-tight">Our Work Process</h2>
          <hr className="mt-5 border-[#a1745a] w-24 mx-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-12">
          {cardData.map((item, index) => (
            <Card
              key={item.id}
              id={item.id}
              icon={item.icon}
              title={item.title}
              text={item.text}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Interior Section */}
      <section
        ref={interiorRef}
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/your-image.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center md:items-start gap-16">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInteriorInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start space-y-10 md:w-1/2"
          >
            <button className="bg-[#a1745a] rounded-3xl w-24 h-24 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <FaPlay className="text-white text-3xl ml-1" />
            </button>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-md text-center md:text-left select-none">
              Leading in Interior <br /> Design Market
            </h1>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInteriorInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mt-[8%] bg-white/20 rounded-xl p-10 backdrop-blur-md shadow-lg"
          >
            <ul className="space-y-6 text-lg font-semibold text-[#f5f1eb]">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInteriorInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.15, duration: 0.5 }}
                  className="flex items-center gap-5"
                >
                  <FaCheck className="text-[#a1745a] flex-shrink-0 text-xl" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeProcess;
