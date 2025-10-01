import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaPinterest, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

const footerData = {
  company: {
    logoText: 'Ambed',
    subText: 'Painting & Wallpapering',
    description:
      'We work with a passion of taking challenges and creating new ones in advertising sector.',
    social: [
      { icon: <FaTwitter />, url: 'https://twitter.com' },
      { icon: <FaFacebook />, url: 'https://facebook.com' },
      { icon: <FaPinterest />, url: 'https://pinterest.com' },
      { icon: <FaInstagram />, url: 'https://instagram.com' },
    ],
  },
  explore: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Painting Services', path: '/' },
    { name: 'Wallpaper Installation', path: '/' },
    { name: 'Color Consultation', path: '/' },
    { name: 'Commercial Projects', path: '/' },
  ],
  contact: {
    phone: '+98 (000) - 9630',
    email: 'ambed@company.com',
    address: '380 St Kilda Road, Melbourne, Australia',
  },
};

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Custom link component that scrolls to top for home path
  const CustomLink = ({ to, children, ...props }) => {
    const handleClick = (e) => {
      if (to === '/') {
        e.preventDefault();
        scrollToTop();
      }
    };

    return (
      <Link to={to} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  };

  return (
    <>
      <footer className="bg-[#3d3230] text-[#c29a83] font-sans py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter */}
          <div className="bg-[#a67c68] rounded-[40px] p-6 mb-10 flex flex-col md:flex-row items-center justify-between text-white">
            <div className="mb-6 md:mb-0 md:mr-6 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-1">Join Our Newsletter</h2>
              <p className="text-sm">Lorem ipsum dolor amet, elit do eiusmod sed</p>
            </div>
            <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow py-3 px-4 rounded-l-md border-2 border-white text-black text-base focus:outline-none focus:ring-2 focus:ring-[#3d3230]"
                required
              />
              <button
                type="submit"
                className="bg-[#3d3230] text-white font-bold px-6 rounded-r-md hover:bg-black transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer main */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[#c29a83]">
            {/* Company */}
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src='https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/logo-light.png' 
                  alt='Ambed Logo' 
                  className='h-10 w-auto'
                />
              </div>
              <div className="text-xs text-[#d1bfa5] mb-2">{footerData.company.subText}</div>
              <p className="mb-4 text-sm">{footerData.company.description}</p>
              <div className="flex gap-4">
                {footerData.company.social.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3d3230] rounded-full w-9 h-9 flex items-center justify-center text-xl text-[#c29a83] hover:text-[#a1745a] transition-colors"
                    aria-label={`Follow us on ${social.url.split('.')[1]}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Explore</h3>
              <ul className="space-y-3">
                {footerData.explore.map(({ name, path }, idx) => (
                  <li key={idx}>
                    {path === '/' ? (
                      <button
                        onClick={scrollToTop}
                        className="text-[#c29a83] cursor-pointer hover:text-[#a1745a] transition-colors text-sm text-left w-full text-start"
                      >
                        {name}
                      </button>
                    ) : (
                      <Link
                        to={path}
                        className="text-[#c29a83] hover:text-[#a1745a] transition-colors cursor-pointer text-sm"
                      >
                        {name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Services</h3>
              <ul className="space-y-3">
                {footerData.services.map(({ name, path }, idx) => (
                  <li key={idx}>
                    {path === '/' ? (
                      <button
                        onClick={scrollToTop}
                        className="text-[#c29a83] cursor-pointer hover:text-[#a1745a] transition-colors text-sm text-left w-full text-start"
                      >
                        {name}
                      </button>
                    ) : (
                      <Link
                        to={path}
                        className="text-[#c29a83] hover:text-[#a1745a] transition-colors text-sm"
                      >
                        {name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Contact</h3>
              <div className="space-y-6 text-sm">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3d3230] rounded-full p-2 flex items-center justify-center">
                    <FaPhone className="text-[#c29a83]" />
                  </div>
                  <div>
                    <div className="text-xs">Call anytime</div>
                    <div className="font-bold text-white">{footerData.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#3d3230] rounded-full p-2 flex items-center justify-center">
                    <FaEnvelope className="text-[#c29a83]" />
                  </div>
                  <div>
                    <div className="text-xs">Send email</div>
                    <div className="font-bold text-white">{footerData.contact.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#3d3230] rounded-full p-2 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[#c29a83]" />
                  </div>
                  <div>
                    <div className="text-xs">Visit us</div>
                    <div className="font-bold text-white">{footerData.contact.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#a67c68] mt-10 pt-6 text-center text-xs text-[#a1745a]">
            <p>© {new Date().getFullYear()} Ambed Painting & Wallpapering. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#a67c68] text-white p-3 rounded-full shadow-lg hover:bg-[#8c5f4e] transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default Footer;