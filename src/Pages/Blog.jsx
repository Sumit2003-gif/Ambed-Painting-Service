import React, { useState, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { blogData } from '../Components/BlogData';
import BlogCard from '../Components/BlogCard';

const Blog = () => {
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const sortedBlogs = useMemo(
    () => [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date)),
    []
  );
  const latestBlogs = useMemo(() => sortedBlogs.slice(0, 2), [sortedBlogs]);
  const paginatedBlogs = useMemo(() => sortedBlogs.slice(2), [sortedBlogs]);
  const totalPages = Math.ceil(paginatedBlogs.length / blogsPerPage);

  const currentBlogs = useMemo(() => {
    const end = currentPage * blogsPerPage;
    const start = end - blogsPerPage;
    return paginatedBlogs.slice(start, end);
  }, [currentPage, paginatedBlogs]);

  const handlePrev = () => currentPage > 1 && setCurrentPage(prev => prev - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(prev => prev + 1);

  // Refs for scroll-trigger sections
  const heroRef = useRef(null);
  const latestRef = useRef(null);
  const moreRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const latestInView = useInView(latestRef, { once: true });
  const moreInView = useInView(moreRef, { once: true });

  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-lg font-semibold tracking-widest text-gray-200">AMBED</span>
            <div className="w-4 h-4 rotate-45 bg-gray-200" />
            <span className="text-lg font-semibold tracking-widest text-gray-200">Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">Our View</h1>
          <p className="max-w-2xl mx-auto text-md sm:text-lg md:text-xl text-gray-300">
            At AMBED, we blend creativity and innovation to deliver unforgettable experiences. Dive into our thoughts, insights, and inspiration.
          </p>
        </motion.div>
      </section>

      {/* LATEST BLOGS */}
      <section ref={latestRef} className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={latestInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          🔥 Latest Blogs
        </motion.h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {latestBlogs.map(blog => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              animate={latestInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-[1.01] transition duration-300"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <span className="inline-block bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full mb-2">Latest</span>
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <p className="text-gray-400 text-sm">{new Date(blog.date).toLocaleDateString()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MORE BLOGS WITH STAGGER */}
      <section ref={moreRef} className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={moreInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          📚 More from the Blog
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={moreInView ? 'show' : 'hidden'}
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentBlogs.map(blog => (
            <motion.div key={blog.id} variants={cardVariants}>
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </motion.div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            …{/* buttons as before */}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
