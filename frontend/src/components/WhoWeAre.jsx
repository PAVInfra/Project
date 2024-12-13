// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../assets/css/AboutUs.module.css';
import logo from "./PAV.png";

const WhoWeAre = () => {
    return (
      <div className={styles.aboutUsContainer}>
        <motion.div
          className={styles.aboutUsHeading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">About Us</h1>
        </motion.div>
        <motion.div
          className={styles.aboutUsContent}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <img src={logo} alt="Pavinfra" className={styles.a} />
          <p className="text-lg">
          PAV Infra Developers: Engineering Excellence Across India With nearly two decades of experience, 
          PAV Infra Developers stands as a beacon of engineering and construction excellence across India. Our vast expertise 
          encompasses excavation design, fabrication, prototyping, construction, supply chains, engineering solutions, and real estate.
           Fueled by a profound passion for engineering, design, and construction, we have established ourselves as pioneers in the industry. Our team’s unwavering 
           commitment ensures the delivery of intelligent and robust solutions, tailored to our clients’ needs, placing us alongside the industry’s best.
          </p>
        </motion.div>
        
      </div>
    );
  };
  
  export default WhoWeAre;