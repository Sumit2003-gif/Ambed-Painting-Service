import React from 'react';
import { Link } from 'react-router-dom';

const footerData = {
  company: {
    logoText: 'Ambed',
    subText: 'Painting & Wallpapering',
    description:
      'We work with a passion of taking challenges and creating new ones in advertising sector.',
    social: [
      { icon: '🐦', url: 'https://twitter.com' },
      { icon: '📘', url: 'https://facebook.com' },
      { icon: '📌', url: 'https://pinterest.com' },
      { icon: '📷', url: 'https://instagram.com' },
    ],
  },
  explore: [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Our Team', path: '/team' },
    { name: 'Our Services', path: '/services' },
    { name: 'Latest Projects', path: '/projects' },
    { name: 'Pricing & Plans', path: '/pricing' },
  ],
  services: [
    { name: 'Room Wallpapers', path: '/services/room-wallpapers' },
    { name: 'Wall Painting', path: '/services/wall-painting' },
    { name: 'Wall Sheets', path: '/services/wall-sheets' },
    { name: 'Outdoor Design', path: '/services/outdoor-design' },
    { name: 'PVC Panels', path: '/services/pvc-panels' },
    { name: 'Interior Designing', path: '/services/interior-designing' },
  ],
  contact: {
    phone: '+98 (000) - 9630',
    email: 'ambed@company.com',
    address: '380 St Kilda Road, Melbourne, Australia',
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#3d3230] text-[#c29a83] font-sans p-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="bg-[#a67c68] rounded-[40px] p-8 mb-8 flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-1">Join Our Newsletter</h2>
            <p className="text-sm">Lorem ipsum dolor amet, elit do eiusmod sed</p>
          </div>
          <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-md mr-4 border-2 border-white text-black text-base"
            />
            <button
              type="submit"
              className="bg-[#3d3230] text-white font-bold px-6 rounded-r-md hover:bg-black transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer main */}
        <div className="flex flex-wrap justify-between gap-8 text-[#c29a83]">
          {/* Company */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-2">
              {/* <div className="w-10 h-10 bg-[#c29a83] rounded-full"></div */}
              {/* <span>{footerData.company.logoText}</span>
               */}<img src='https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/logo-light.png' className='w-30'/>
            </div>
            <div className="text-xs text-[#d1bfa5] mb-4">{footerData.company.subText}</div>
            <p className="mb-4">{footerData.company.description}</p>
            <div className="flex gap-4">
              {footerData.company.social.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3d3230] rounded-full w-9 h-9 flex items-center justify-center text-xl text-[#c29a83] hover:text-[#a1745a] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="flex-1 min-w-[160px]">
            <h3 className="text-white font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerData.explore.map(({ name, path }, idx) => (
                <li key={idx}>
                  <Link
                    to={path}
                    className="text-[#c29a83] hover:text-[#a1745a] transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex-1 min-w-[160px]">
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerData.services.map(({ name, path }, idx) => (
                <li key={idx}>
                  <Link
                    to={path}
                    className="text-[#c29a83] hover:text-[#a1745a] transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-6 text-sm">
              <div className="flex items-center gap-3">
                <span
                  role="img"
                  aria-label="phone"
                  className="bg-[#3d3230] rounded-full p-2 inline-block"
                >
                  📞
                </span>
                <div>
                  <div className="text-xs">Call anytime</div>
                  <div className="font-bold text-white">{footerData.contact.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  role="img"
                  aria-label="email"
                  className="bg-[#3d3230] rounded-full p-2 inline-block"
                >
                  📧
                </span>
                <div>
                  <div className="text-xs">Send email</div>
                  <div className="font-bold text-white">{footerData.contact.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  role="img"
                  aria-label="location"
                  className="bg-[#3d3230] rounded-full p-2 inline-block"
                >
                  📍
                </span>
                <div>
                  <div className="text-xs">380 St Kilda Road</div>
                  <div className="font-bold text-white">{footerData.contact.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
