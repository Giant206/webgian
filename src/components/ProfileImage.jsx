/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import profile from "/src/assets/ProfileGian.jpg"; 

export default function ProfileImage() {
  return (
    <motion.div
      className="profile-img"
      initial={{ opacity: 0, y: -30 }}   
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src={profile}
        alt="profile"
        animate={{ rotate: [0, 360] }}  
        transition={{
          duration: 6,
          ease: "easeInOut",   
          repeat: Infinity,
          repeatType: "loop"
        }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </motion.div>
  );
}
