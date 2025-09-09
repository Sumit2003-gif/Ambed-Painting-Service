import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from './BlogData';
import { motion, useInView } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
  // Simple letter-by-letter animation for headings
  const letters = Array.from(text);

  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.03,
          },
        },
      }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const SingleBlogPage = () => {
  const { id } = useParams();
  const blogId = Number(id);

  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Blog not found</h2>
        <p>The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  const [comments, setComments] = useState(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_blog_${blog.id}`)) || [];
    return storedComments;
  });
  const [formData, setFormData] = useState({ name: '', comment: '' });
  const localStorageKey = `comments_blog_${blog.id}`;

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    setComments(storedComments);
  }, [localStorageKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    const newComment = {
      id: Date.now(),
      name: formData.name.trim(),
      comment: formData.comment.trim(),
      date: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedComments));
    setFormData({ name: '', comment: '' });
  };

  // Refs & InView for animation triggers
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const contentRef = useRef(null);
  const commentsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const introInView = useInView(introRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });
  const commentsInView = useInView(commentsRef, { once: true });

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[80vh] flex items-center justify-center text-white px-4"
        style={{
          backgroundImage: `url(${blog.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <motion.div
          className="relative z-10 text-center max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-lg font-semibold tracking-widest text-gray-200">AMBED</span>
            <div className="w-4 h-4 rotate-45 bg-gray-200"></div>
            <span className="text-lg font-semibold tracking-widest text-gray-200">Blog</span>
          </div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {blog.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Posted on {new Date(blog.date).toLocaleDateString()}
          </motion.p>
        </motion.div>
      </section>

      {/* Back to Blog Button */}
      <div className="max-w-4xl mx-auto px-6 mt-6">
        <Link
          to="/blog"
          className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* New Image Section */}
      <motion.section
        ref={introRef}
        className="max-w-4xl mx-auto px-6 py-10 mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={introInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
          alt="Decorative"
          className="w-full rounded-md shadow-md object-cover max-h-96 mx-auto"
        />
      </motion.section>

      {/* New Intro Section */}
      <motion.section
        ref={contentRef}
        className="max-w-4xl mx-auto px-6 py-10 bg-gray-50 rounded-md shadow-md mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <AnimatedText
          text="Why This Topic Matters"
          className="text-3xl font-semibold mb-4 text-gray-800"
        />
        <p className="text-gray-700 mb-4">
          Understanding the right approach to {blog.title.toLowerCase()} can save you time, money,
          and frustration. In this article, we'll walk you through the key points and best practices
          so you can achieve the best results.
        </p>
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Key Highlights</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Expert tips from industry professionals</li>
          <li>Common mistakes to avoid</li>
          <li>Step-by-step guidelines for success</li>
          <li>Recommendations for tools and materials</li>
        </ul>
      </motion.section>

      {/* Blog Content */}
      <motion.div
        ref={commentsRef}
        className="max-w-4xl mx-auto px-6 py-12 prose prose-lg text-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={commentsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {blog.content.split('\n').map((para, i) =>
          para.trim() ? (
            <p key={i}>{para}</p>
          ) : (
            <br key={`br-${i}`} />
          )
        )}
      </motion.div>

      {/* Comments Section */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-10 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={commentsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">💬 Comments</h3>

        {comments.length === 0 ? (
          <p className="text-gray-500 mb-6">No comments yet. Be the first!</p>
        ) : (
          <div className="space-y-4 mb-8">
            {comments.map(({ id, name, comment, date }) => (
              <div key={id} className="p-4 border rounded-md bg-gray-50">
                <div className="font-semibold text-gray-800">{name}</div>
                <div className="text-gray-600 mt-1">{comment}</div>
                <div className="text-xs text-gray-400 mt-2">
                  {new Date(date).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-black"
            required
          />
          <textarea
            name="comment"
            placeholder="Leave a comment..."
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-black"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Submit Comment
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SingleBlogPage;
