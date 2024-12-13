// // src/components/Card.js
import React from "react";
import{ useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../assets/css/Card.module.css';

const Card = ({ image, title, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <motion.div
        className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <motion.img 
              src={image} 
              alt={title} 
              className={styles.cardImage}
              initial={{ opacity: 0.5 }} 
              whileHover={{ opacity: 1 }} 
              transition={{ duration: 0.3 }}
            />
            <h3 className={`${styles.cardTitle} text-white text-2xl font-bold`}>{title}</h3>
          </div>
          <div className={styles.cardBack}>
            <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white p-4">{description}</p>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default Card;