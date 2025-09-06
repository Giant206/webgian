/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const skills = [
    ["HTML", 90, "html"],
    ["CSS", 87, "css"],
    ["JavaScript", 79, "javascript"],
    ["Lua", 43, "lua"],
    ["Pawno", 56, "pawno"],
    ["React.js", 76, "react"],
    ["Python", 50, "python"],
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    let timers = [];
    if (inView) {
      timers = skills.map((s, i) =>
        setTimeout(() => {
          setProgress((prev) => {
            const updated = [...prev];
            updated[i] = s[1];
            return updated;
          });
        }, i * 200)
      );
    } else {
      setProgress(skills.map(() => 0));
    }

    return () => timers.forEach((t) => clearTimeout(t));
  }, [inView]);

  return (
    <div className="skills-section" id="skills" ref={ref}>
      <h1 className="skills-title">My Skills</h1>
      <p className="skills-desc">
        Saya memiliki pengalaman dalam pengembangan web menggunakan HTML, CSS, dan JavaScript,
        termasuk framework React.js untuk membangun tampilan modern dan interaktif.
        Selain itu, saya juga pernah menggunakan bahasa lain seperti Lua, Pawno, dan Python
        untuk berbagai proyek kecil maupun eksperimen.
      </p>

      <div className="skills-list">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="skill-item"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="skill-header">
              <span className="skill-name">{s[0]}</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className={`skill-progress ${s[2]}`}
                style={{ width: `${progress[i]}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="skill-percent">{progress[i]}%</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
