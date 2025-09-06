import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const images = [
    "/src/assets/img-projects/project-bot1.png",
    "/src/assets/img-projects/project-bot2.png",
    "/src/assets/img-projects/project-bot3.png",
    "/src/assets/img-projects/project-bot4.png",
    "/src/assets/img-projects/projects-mc1.png",
    "/src/assets/img-projects/projects-mc2.png",
    "/src/assets/img-projects/projects-samp3.png",
    "/src/assets/img-projects/projects-samp4.png",
    "/src/assets/img-projects/projects-samp5.png",
    "/src/assets/img-projects/projects-samp6.png",
    "/src/assets/img-projects/projects-samp7.png",
    "/src/assets/img-projects/projects-samp8.png",
  ];

  const [preview, setPreview] = useState(null);

  return (
    <div className="projects-section" id="projects">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-desc">
        Saya pernah mengerjakan berbagai macam project, mulai dari setup dan konfigurasi
        bot WhatsApp dengan sistem otomatis, pembuatan serta pengelolaan server GTA Samp, Minecraft
        hingga pengembangan aplikasi berbasis web dengan HTML, CSS, JavaScript, dan React.js.
        Selain itu, saya juga terbiasa melakukan eksperimen dengan bahasa lain seperti Lua,
        Pawno, dan Python untuk mendukung kebutuhan tertentu dalam proyek.
      </p>

      <div className="projects-grid">
        {images.map((src, i) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

          return (
            <motion.div
              ref={ref}
              key={i}
              className="project-card"
              onClick={() => setPreview(src)}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <img src={src} alt={`Project ${i + 1}`} />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="preview-overlay"
            onClick={() => setPreview(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="preview-box"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="close-btn" onClick={() => setPreview(null)}>
                ✕
              </button>
              <img src={preview} alt="Preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
