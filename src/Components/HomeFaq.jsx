import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "Quisque non diam porta, ullamcorper dolor sit amet.",
    answer:
      "Lorem ipsum dolor sit amet, conse ctetur adipisicing elit sed do eiusm od tempor ut labore. sit amet scelerisque eros. Phasellus hendrerit neque a augue",
  },
  {
    question: "Sed mattis neque sed commodo efficitur.",
    answer:
      "Lorem ipsum dolor sit amet, conse ctetur adipisicing elit sed do eiusm od tempor ut labore. sit amet scelerisque eros. Phasellus hendrerit neque a augue",
  },
  {
    question: "How can I make a change to my application?",
    answer:
      "Lorem ipsum dolor sit amet, conse ctetur adipisicing elit sed do eiusm od tempor ut labore. sit amet scelerisque eros. Phasellus hendrerit neque a augue",
  },
  {
    question: "Duis id leo id quam venenatis lobortis eu mattis ex.",
    answer:
      "Lorem ipsum dolor sit amet, conse ctetur adipisicing elit sed do eiusm od tempor ut labore. sit amet scelerisque eros. Phasellus hendrerit neque a augue",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomeFaq = () => {
  const [activeIndex, setActiveIndex] = useState(2); // 3rd open by default
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-7xl mx-auto py-16 px-5 grid grid-cols-1 lg:grid-cols-2 gap-12"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Left Content */}
      <motion.div variants={itemVariants} className="px-2 md:px-0">
        <p className="uppercase text-sm text-[#c3a38a] font-semibold mb-2 tracking-widest">
          our benefits
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
          Find the Best Wallpaper <br /> for Your Room
        </h2>
        <div className="w-16 h-[2px] bg-[#c3a38a] mb-6" />
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          eiusmod tempor ut labore. Sit amet scelerisque eros. Phasellus
          hendrerit neque a augue.
        </p>

        {/* Images with Text */}
        <div className="grid grid-cols-2 gap-4 items-center">
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <img
              src="https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/benefits-one-points-img-1.jpg"
              alt="Benefit 1"
              className="w-full md:w-52 h-28 object-cover rounded-md"
            />
            <p className="text-sm text-gray-700 font-bold mt-3">
              If you are going passage
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <img
              src="https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/benefits-one-points-img-2.jpg"
              alt="Benefit 2"
              className="w-full md:w-52 h-28 object-cover rounded-md"
            />
            <p className="text-sm font-bold text-gray-700 mt-3">
              Lorem ipsum available
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Content (FAQs) */}
      <motion.div variants={containerVariants} className="space-y-4 px-2 md:px-0">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`border rounded-2xl p-2 transition-all duration-300 cursor-pointer ${
                isOpen ? "bg-white shadow-md" : "bg-transparent"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span
                  className={`font-semibold text-base transition-colors ${
                    isOpen ? "text-[#c3a38a]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="text-sm text-gray-600">
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HomeFaq;
