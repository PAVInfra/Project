import { motion } from "framer-motion";
import styles from "./DisplayService.module.css";
import React from "react";
const DisplayService = (props) => {
  return (
    <motion.div
      className={styles.cont}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl">{props.title}</h1>
      <div className={styles.content}>
        <p>{props.description}</p>
        <div className={styles.imgs}>
          <motion.img
            className={styles.imgStyle}
            src={props.img1}
            alt="Service 1"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.img
            className={styles.imgStyle}
            src={props.img1}
            alt="Service 2"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.img
            className={styles.imgStyle}
            src={props.img1}
            alt="Service 3"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DisplayService;
