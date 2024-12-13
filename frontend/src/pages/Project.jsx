import React from 'react';

import { useState,useEffect } from "react";
// import logo from '../assets/icons/logo.svg';
//import "../components/servicecomponents/Service.css";
import styles from "../assets/css/Project.module.css";
//import Card from "../components/Card";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { getProjects, getOngoingProjects, getCompletedProjects } from '../Services/services';
const Project = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ongoing, setOngoing] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [projects,setProjects]=useState([]);
  const [ongoingprojects,setOngoingProjects]=useState([]);
  const [completedprojects,setCompletedProjects]=useState([]);
  const sections = ["Ongoing Projects", "Completed Projects"];
  useEffect(() => {
    getProjects().then((data)=>{
    setProjects(data);
      console.log(data);
    })
  }, []);
  
  useEffect(() => {
    getCompletedProjects().then((data)=>{
      setCompletedProjects(data);
      console.log(data);
    })
  }, []);

  useEffect(() => {
    getOngoingProjects().then((data)=>{
      setOngoingProjects(data);
      console.log(data);
    })
  }, []);

  function ongoingBoolean() {
    setOngoing(true);
    setCompleted(false);
  }

  function completedBoolean() {
    setCompleted(true);
    setOngoing(false);
  }
  //useEffect(() => {
   // const filt = projects.filter(
    //  (entry) => entry.status==='ongoing'
   // );
   // setOngoingProjects(filt);
//console.log(ongoingprojects);
  // const filteredongoingproject = projects.filter(
  //   (entry) => entry.status === 'ongoing' 
  // );
  // setOngoingProjects(filteredongoingproject);
  // console.log(ongoingprojects);
  // const filteredcompletedproject = projects.filter(
  //   (entry) => entry.status === 'completed'  
  // );
  // setCompletedProjects(filteredcompletedproject);
  // console.log(completedprojects);
  //},[]);

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
          className={styles.tabbuttons}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {sections.map((tab, index) => (
            <button
              key={index}
              // className={`tabbutton ${activeTab === index ? "active" : ""}`}
              className={
                activeTab === index ? styles.tabbuttonactive : styles.tabbutton
              }
              onClick={() => {
                setActiveTab(index);
                index === 0 ? ongoingBoolean() : completedBoolean();
              }}
            >
              {tab}
            </button>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
        >
          {ongoing &&
            ongoingprojects.map((tab) => (
              <ProjectCard
                details={tab}
              />
            ))}
          {/* {ongoing &&  tabs.map((tab, index) => (
            key={index}
            <ProjectCard first="ongoing" second="SECOND" />
           
          ))} */}
          {completed &&
            completedprojects.map((tab) => (
              <ProjectCard
                details={tab}
              />
            ))}
        </motion.div>
      </div>
      
    </div>
  );
};

export default Project;
