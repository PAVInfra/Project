// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import styles from '../assets/css/AboutUs.module.css';

const VisionMission = () => {
    return (
      <div className={styles.aboutUsContainer}>
        <motion.div
          className={styles.aboutUsHeading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Vision</h1>
        </motion.div>
        <motion.div
          className={styles.aboutUsContent}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <img src="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" alt="Pavinfra" className={styles.aboutUsImage} />
          <ul className="text-lg">
          <li>To venture into multi-Disciplines.</li>
          <li>To become the Construction Beacon of South India.</li>
          <li>To render customized and innovative construction and Infra solutions.</li>
          <li>To become the one stop solution provider to engineering based Industries.</li>
          </ul>
        </motion.div>
        
        <motion.div
          className={styles.aboutUsHeading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Mission</h1>
        </motion.div>
        <motion.div
          className={styles.aboutUsContent}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <img src="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" alt="Pavinfra" className={styles.aboutUsImage} />
          <ul className="text-lg">
          <li>To be synonymous with excellence in overall Construction and Engineering services.</li>
          <li>To emphasize the existence of our company that underpins every aspect of development and empowering of our employ- ees to live in accordance with our company values.</li>
          <li>To be the industry's partner of choice, by delivering quality and value in the various construction sectors through integrated solutions and services.</li>
          
          </ul>
        </motion.div>
        </div>
    );
  };
  
  export default VisionMission;