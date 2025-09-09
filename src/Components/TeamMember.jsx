import React, { useRef } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const teamMembers = [
  {
    name: "David Cooper",
    role: "Designer",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    social: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      instagram: "#",
    },
    colors: {
      bg: "bg-pink-100",
      border: "border-pink-500",
      badge: "bg-pink-600",
      iconBg: "bg-pink-600",
      iconHoverBg: "hover:bg-pink-400",
      nameText: "text-pink-700",
      shadow: "shadow-pink-300",
    },
  },
  {
    name: "Sophia Lee",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    social: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      instagram: "#",
    },
    colors: {
      bg: "bg-green-100",
      border: "border-green-500",
      badge: "bg-green-700",
      iconBg: "bg-green-700",
      iconHoverBg: "hover:bg-green-400",
      nameText: "text-green-800",
      shadow: "shadow-green-300",
    },
  },
  {
    name: "James Wilson",
    role: "Developer",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
    social: {
      twitter: "#",
      facebook: "#",
      pinterest: "#",
      instagram: "#",
    },
    colors: {
      bg: "bg-blue-100",
      border: "border-blue-600",
      badge: "bg-blue-700",
      iconBg: "bg-blue-700",
      iconHoverBg: "hover:bg-blue-400",
      nameText: "text-blue-800",
      shadow: "shadow-blue-300",
    },
  },
];

const TeamMemberCard = ({ name, role, image, social, colors, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true, amount: 0.2 }}
    className="group"
  >
    <div
      className={`${colors.bg} max-w-xs mx-auto rounded-3xl border-4 ${colors.border} shadow-lg ${colors.shadow} hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-3`}
    >
      {/* Image container */}
      <div className="relative overflow-hidden rounded-t-3xl border-b-4 border-white">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Social icons overlay */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 py-3 rounded-b-3xl">
          {Object.entries(social).map(([key, url]) => {
            const Icon = {
              twitter: FaTwitter,
              facebook: FaFacebookF,
              pinterest: FaPinterestP,
              instagram: FaInstagram,
            }[key];
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className={`${colors.iconBg} ${colors.iconHoverBg} text-white p-2 rounded-full text-xl transition-colors shadow-md`}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      {/* Info section */}
      <div className="p-6 text-center">
        <p
          className={`${colors.badge} text-white text-xs font-semibold tracking-widest rounded-full inline-block px-6 py-2 mb-3 select-none shadow-lg`}
        >
          {role.toUpperCase()}
        </p>
        <h3
          className={`text-3xl font-extrabold ${colors.nameText} drop-shadow-md`}
        >
          {name}
        </h3>
      </div>
    </div>
  </motion.div>
);

const TeamMember = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 rounded-xl"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-16 px-4"
      >
        <p className="uppercase text-sm tracking-widest text-gray-600 font-semibold mb-3">
          Team Member
        </p>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
          Meet the Expert Team
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
          Meet our talented team of professionals dedicated to delivering
          exceptional work with passion and creativity.
        </p>
      </motion.div>

      {/* Cards container */}
      <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <TeamMemberCard
            key={idx}
            name={member.name}
            role={member.role}
            image={member.image}
            social={member.social}
            colors={member.colors}
            delay={0.2 * idx}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
