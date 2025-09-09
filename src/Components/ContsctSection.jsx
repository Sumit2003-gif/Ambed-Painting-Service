import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null);
  const contactRef = useRef(null);
  const formInView = useInView(formRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(formData);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Message sent! Data saved to local storage.");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-lg">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h4 className="uppercase text-sm tracking-widest text-[#9b8479] mb-2">Contact Us</h4>
        <h2 className="text-4xl font-extrabold mb-12 text-[#4a3c39] relative inline-block">
          Feel Free to Write
          <span className="block w-12 h-1 bg-[#9b8479] mt-1 rounded"></span>
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="bg-[#f1ece8] p-4 text-[#6b5b56] rounded-md placeholder-[#a3938e] border border-transparent focus:border-[#9b8479] focus:outline-none transition"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="bg-[#f1ece8] p-4 text-[#6b5b56] rounded-md placeholder-[#a3938e] border border-transparent focus:border-[#9b8479] focus:outline-none transition"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="bg-[#f1ece8] p-4 text-[#6b5b56] rounded-md placeholder-[#a3938e] border border-transparent focus:border-[#9b8479] focus:outline-none transition"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-[#f1ece8] p-4 text-[#6b5b56] rounded-md placeholder-[#a3938e] border border-transparent focus:border-[#9b8479] focus:outline-none transition"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Write a message"
            className="bg-[#f1ece8] p-4 text-[#6b5b56] rounded-md placeholder-[#a3938e] border border-transparent focus:border-[#9b8479] focus:outline-none transition md:col-span-2 resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="md:col-span-2 bg-[#4a3c39] text-white py-4 px-10 rounded-md hover:bg-[#3a2e2b] font-semibold transition duration-300"
          >
            Send a Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, x: 50 }}
          animate={contactInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-96"
        >
          <div className="mb-8">
            <p className="text-[#a3938e] mb-1">Call anytime</p>
            <p className="font-bold text-[#4a3c39] text-lg">+98 (000) - 9630</p>
          </div>
          <div className="mb-8">
            <p className="text-[#a3938e] mb-1">Send email</p>
            <p className="font-bold text-[#4a3c39] text-lg">ambed@company.com</p>
          </div>
          <div className="mb-8">
            <p className="text-[#a3938e] mb-1">Visit Office</p>
            <p className="font-bold text-[#4a3c39] text-lg leading-relaxed">
              380 St Kilda Golden Road
              <br />
              Melbourne, Australia
            </p>
          </div>
          <hr className="border-[#e2d7d1] mb-6" />
          {/* Socials (optional) */}
          {/* <div className="flex gap-4"> ...social icons here... </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
