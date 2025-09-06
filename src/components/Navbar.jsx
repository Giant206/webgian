import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const navVariant = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.nav
      className="navbar"
      variants={navVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="logo">GianWeb</div>
      <ul className="nav-links">
        <li>
          <Link to="about" smooth={true} duration={600}>About</Link>
        </li>
        <li>
          <Link to="hosting" smooth={true} duration={600}>Hosting</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={600}>Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={600}>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={600}>Contact</Link>
        </li>
      </ul>
    </motion.nav>
  );
}
