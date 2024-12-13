import React,{useState} from "react";
import { motion } from "framer-motion";
import styles from "./ServiceCard.module.css";
import DisplayService from "./DisplayService";
import CustomModal from "../CustomModal";
import { FaLess } from "react-icons/fa";
const ServiceCard = ({ details,title, description, image }) => {
const[open,setOpen]=useState(false);
  const handleClose=()=>{
setOpen(false);
  };
  const handleOpen=()=>{
    setOpen(true);
      };
  return (
  <div>
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={handleOpen}
    >
      <div className={styles.info}>
        <h2 className="text-2xl">{title}</h2>
        <p>{description}</p>
      </div>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </motion.div>
    <CustomModal show={open} handleClose={handleClose}><div>
      <DisplayService title={title} description={details.description} img1={image}/>
    </div>
    </CustomModal>

    
  
    </div>
  );
};

export default ServiceCard;
