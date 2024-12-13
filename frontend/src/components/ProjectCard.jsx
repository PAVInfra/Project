import {useState} from "react";
import React from "react";
import styles from "../assets/css/ProjectCard.module.css";
import ProjectDisplay from "./ProjectDisplay";
import CustomModal from "./CustomModal";
const ProjectCard=(props)=> {

  const[open,setOpen]=useState(false);
  const handleClose=()=>{
setOpen(false);
console.log(props.details);
  };

  const openPopup = () => setOpen(true);
  
  return (
    <div>
    <div className={styles.card} onClick={openPopup}>
    {/* <div className={styles.card}> */}
      
      <div className={styles.firstContent}>
        <img className="rounded-t-lg" src={props.image} />
        <h2>{props.details.name}</h2>
    
      </div>
      <div className={styles.secondContent}>
      <h3 className="text-black text-2xl font-bold mb-2">{props.details.name}</h3>
        <p className="text-white text-lg p-4">{props.details.short_description}</p>
      </div>
    </div>
    
      <CustomModal show={open} handleClose={handleClose}>
      {/* <div> */}
      <ProjectDisplay details={props.details} img1={'https://www.shutterstock.com/image-photo/hispanic-female-inspector-talking-caucasian-600nw-2389088465.jpg'}/>
    {/* </div> */}
    </CustomModal>
    </div>
  );
}

export default ProjectCard;
