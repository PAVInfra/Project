// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import styles from '../assets/css/AboutUs.module.css';

const AboutUs = () => {
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
          <img src="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" alt="Pavinfra" className={styles.aboutUsImage} />
          <p className="text-lg">
            Pavinfra is a leading company in infrastructure development. We are dedicated to building 
            innovative solutions for urban and rural development, ensuring sustainability and excellence 
            in every project we undertake.
          </p>
        </motion.div>
        <motion.div
          className={styles.whyWeStandApart}
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why We Stand Apart</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Card 
              image="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" 
              title="Subtopic 1" 
              description="We excel in providing innovative infrastructure solutions." 
            />
            <Card 
              image="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" 
              title="Subtopic 2" 
              description="Our team is dedicated to ensuring quality and sustainability." 
            />
            <Card 
              image="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" 
              title="Subtopic 3" 
              description="We prioritize client satisfaction and long-term partnerships." 
            />
            <Card 
              image="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" 
              title="Subtopic 4" 
              description="We leverage cutting-edge technology in all our projects." 
            />
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default AboutUs;