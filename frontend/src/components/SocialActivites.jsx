// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import styles from '../assets/css/AboutUs.module.css';

const SocialActivities = () => {
    return (
      <div className={styles.aboutUsContainer}>
        <motion.div
          className={styles.aboutUsHeading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Social Activities</h1>
        </motion.div>
        <motion.div
          className={styles.aboutUsContent}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <img src="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" alt="Pavinfra" className={styles.aboutUsImage} />
          <p className="text-lg">
           description social activites
          </p>
        </motion.div>
        <motion.div
          className={styles.whyWeStandApart}
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            <img
              src="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" 
             alt=''
            />
            
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default SocialActivities;