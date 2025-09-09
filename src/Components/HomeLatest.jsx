import React, { useRef } from "react";
import { FaUserCircle, FaComments } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const HomeLatest = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const Fews = [
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-4.png",
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-5.png",
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-1.png",
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-2.png",
    "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/brand-1-3.png",
  ];

  const blogData = [
    {
      id: 1,
      image:
        "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/blog-1-1.jpg",
      date: "19 Apr, 2022",
      author: "Admin",
      commentsCount: 2,
      title: "Learn the Right Way to Use Wall Sheet",
    },
    {
      id: 2,
      image:
        "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/blog-1-2.jpg",
      date: "20 Apr, 2022",
      author: "Admin",
      commentsCount: 2,
      title: "A quick solutions for daily problem",
    },
    {
      id: 3,
      image:
        "https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/blog-1-3.jpg",
      date: "20 Apr, 2022",
      author: "Admin",
      commentsCount: 2,
      title: "Capitalize on low hanging fruit",
    },
  ];

  const BlogCard = ({ image, date, author, commentsCount, title, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-[#f5f1eb] w-full sm:w-[300px] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-4 right-4 bg-[#b48b76] text-white px-4 py-1 rounded font-semibold text-sm select-none">
          {date}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-[#8c7c72] text-sm mb-3 space-x-3 select-none">
          <div className="flex items-center gap-1">
            <FaUserCircle />
            <span>{author}</span>
          </div>
          <span>/</span>
          <div className="flex items-center gap-1">
            <FaComments />
            <span>
              {commentsCount} Comment{commentsCount > 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#3a322f] leading-snug cursor-pointer hover:text-[#b48b76] transition-colors">
          {title}
        </h3>
      </div>
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <p className="uppercase text-sm text-[#a1745a] font-semibold tracking-widest mb-2">
          NEWS & UPDATES
        </p>
        <h2 className="text-4xl font-extrabold text-[#3a322f] mb-4">
          Check Latest News & Articles
        </h2>
        <p className="text-[#857b75] leading-relaxed">
          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor to incidut
          labore et dolore magna for aliqua. Cum sociis natoque penatibus et
          magnis dis partu rient to montes. Aene an massa.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {blogData.map((blog, index) => (
          <BlogCard key={blog.id} {...blog} index={index} />
        ))}
      </div>

      {/* Trusted Brands */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold text-[#3a322f] mb-8">
          Trusted by More than 8800 Most Popular Brands
        </h3>

        <div className="flex justify-center flex-wrap gap-10 items-center">
          {Fews.map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={`Brand ${idx + 1}`}
              className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HomeLatest;
