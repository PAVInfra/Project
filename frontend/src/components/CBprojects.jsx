import React from 'react';

import { useState,useEffect } from "react";
// import logo from '../assets/icons/logo.svg';
//import "../components/servicecomponents/Service.css";
import styles from "../assets/css/Project.module.css";
//import Card from "../components/Card";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { getCBProjects, getOngoingProjects, getCompletedProjects } from '../Services/services';
import { useLocation } from 'react-router-dom';

const CBProject = () => {
  const [projects,setProjects]=useState([]);
  const [filtprojects,setFiltProjects]=useState([]);
  const location = useLocation();
  const { customerName } = location.state;

  useEffect(() => {
    console.log(location)
    console.log(customerName);
    getCBProjects(customerName).then((data)=>{
    setProjects(data);
      console.log(data);
    })
  }, [customerName]);
  
 

//   useEffect(() => {
//    const filt = projects.filter(
//     (entry) => entry.customer_name==='chigon'
//     );
//    setFiltProjects(filt);
// console.log(filtprojects);
//   },[]);

  return (
    <div className={styles.project}>
     
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project
      </motion.h1>

      <div className={styles.tabcontainer}>
       
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
        >
          {projects.map((tab) => (
              <ProjectCard
                details={tab}
              />
            ))}
        </motion.div>
      </div>
      
    </div>
  );
};

export default CBProject;
