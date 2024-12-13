import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./servicecomponents/DisplayService.module.css";
import React from "react";
const ProjectDisplay = (props) => {
//   useEffect(() => {
//     console.log(props.details);
//   }, []);
  
  return (
    <motion.div
      className={styles.cont}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl">{props.details.name}</h1>
      <div className={styles.content}>
        <p>Customer Name:<br/>{props.details.customer_name}</p>
        <p>Commencement:<br/>{props.details.commencement}</p>
        <p>City:<br/>{props.details.city}</p>
        <p>State:<br/>{props.details.state}</p>
        <p>Description:<br/>{props.details.description}</p>
        <div className={styles.imgs}>
          
          <motion.img 
            src={props.img1}
            alt="Project 1"
            
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDisplay;