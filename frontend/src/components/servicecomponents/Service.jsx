import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import styles from "./Service.module.css";
import React from "react";
import { getServices } from '../../Services/services';

const Service = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices().then((data)=>{
    setServices(data);
      console.log(data);
    })
  }, []);


  


  const filteredService = services.filter((tab) =>
    tab.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const filteredContent = services.filter((content) =>
  //   .toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className="p-4 ">
      <motion.h1
        className="text-5xl mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h1>

      <motion.input
        type="text"
        placeholder="Search services..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 mb-4  max-w-300 border rounded "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />

      <motion.div
        className="flex flex-wrap justify-center gap-10 "
        // initial="hidden"
        //animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {filteredService.map((tab, index) => (
          <ServiceCard
            key={index}
            details={tab}
            title={tab.name}
            description={tab.shortDescription}
            image="https://www.designingbuildings.co.uk/w/images/0/0e/Digger-g2a9f4c324_1280.jpg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
