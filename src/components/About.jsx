import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProfileImage from "./ProfileImage";

export default function About() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = [
    "Hosting & Development Newbie",
    "Web Developer",
    "Game Server Builder",
    "Cloud Hosting Learner",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timer;

    if (!deleting && subIndex < currentText.length) {
      timer = setTimeout(() => setSubIndex(subIndex + 1), 120);
    } else if (deleting && subIndex > 0) {
      timer = setTimeout(() => setSubIndex(subIndex - 1), 80);
    } else if (!deleting && subIndex === currentText.length) {
      timer = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      timer = setTimeout(() => setSubIndex(1), 500);
    }

    return () => clearTimeout(timer);
  }, [subIndex, deleting, index, texts]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="hero">
      <ProfileImage />

      <div className="hero-text">
        {/* Typing Effect */}
        <h1 className="title typing-text">
          {texts[index].substring(0, subIndex)}
        </h1>

        {/* Paragraf dengan animasi */}
        <motion.p
          className="desc"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Halo, saya <strong>Argiant Permana Putra</strong>, berusia{" "}
          <strong>16 tahun</strong> dan tinggal di Depok. Saya pelajar di{" "}
          <strong>SMK An-Nur</strong> dengan minat besar di bidang{" "}
          <strong>hosting</strong>, <strong>development</strong>, dan{" "}
          <strong>teknologi</strong>.
        </motion.p>

        <motion.p
          className="desc"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Saya suka membangun server, mempelajari pemrograman, dan mengembangkan
          proyek yang berkaitan dengan <strong>web</strong>,{" "}
          <strong>game server</strong>, dan <strong>cloud hosting</strong>.
        </motion.p>
      </div>
    </div>
  );
}
