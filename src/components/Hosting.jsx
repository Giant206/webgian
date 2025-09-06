import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import bgMinecraft from "/src/assets/bg-game/bg-minecraft.png";
import bgSamp from "/src/assets/bg-game/bg-samp.png";
import bgMta from "/src/assets/bg-game/bg-mta.png";
import bgFivem from "/src/assets/bg-game/bg-fivem.png";
import bgRust from "/src/assets/bg-game/bg-rust.png";
import bgUnturned from "/src/assets/bg-game/bg-unturned.png";

import sampIcon from "/src/assets/icon-game/samp.png";
import unturnedIcon from "/src/assets/icon-game/unturned.png";
import fivemIcon from "/src/assets/icon-game/fivem.png";
import rustIcon from "/src/assets/icon-game/rust.png";
import mtaIcon from "/src/assets/icon-game/mta.png";
import minecraftIcon from "/src/assets/icon-game/minecraft.png";

export default function Hosting() {
  const servers = [
    {
      name: "Minecraft Hosting",
      desc: "Server cepat dengan optimasi penuh untuk Minecraft.",
      bg: bgMinecraft,
      icon: minecraftIcon,
    },
    {
      name: "GTA SAMP Hosting",
      desc: "Hosting stabil untuk komunitas GTA San Andreas Multiplayer.",
      bg: bgSamp,
      icon: sampIcon,
    },
    {
      name: "MTA Hosting",
      desc: "Optimasi penuh untuk server Multi Theft Auto.",
      bg: bgMta,
      icon: mtaIcon,
    },
    {
      name: "FiveM Hosting",
      desc: "Performa tinggi untuk server roleplay GTA V (FiveM).",
      bg: bgFivem,
      icon: fivemIcon,
    },
    {
      name: "Rust Hosting",
      desc: "Server aman dengan proteksi DDoS untuk Rust.",
      bg: bgRust,
      icon: rustIcon,
    },
    {
      name: "Unturned Hosting",
      desc: "Server survival Unturned dengan performa maksimal.",
      bg: bgUnturned,
      icon: unturnedIcon,
    },
  ];

  return (
    <div className="hosting-section" id="hosting">
      <h1 className="hosting-title">Game Hosting</h1>
      <p className="hosting-desc">
        Saya pernah membuat layanan hosting pribadi untuk berbagai game server
        seperti Minecraft, GTA SAMP, dan lainnya. Tujuannya untuk belajar
        manajemen server, optimasi performa, dan memberikan pengalaman terbaik
        bagi pemain.
      </p>
      <div className="hosting-grid">
        {servers.map((server, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView } = useInView({
            triggerOnce: false, 
            threshold: 0.2, 
          });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="hosting-card"
              style={{ backgroundImage: `url(${server.bg})` }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {server.icon && (
                <img src={server.icon} alt="icon" className="hosting-icon" />
              )}
              <div className="hosting-content">
                <h2>{server.name}</h2>
                <p>{server.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
