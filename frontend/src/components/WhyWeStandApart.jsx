// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import styles from '../assets/css/AboutUs.module.css';

const WhyWeStandApart = () => {
    return (
      <div className={styles.aboutUsContainer}>
       
        
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
              //title="Subtopic 1" 
              description="We excel in providing innovative infrastructure solutions." 
            />
            <Card 
              image="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" 
              //title="Subtopic 2" 
              description="Our team is dedicated to ensuring quality and sustainability." 
            />
            <Card 
              image="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" 
              //title="Subtopic 3" 
              description="We prioritize client satisfaction and long-term partnerships." 
            />
            <Card 
              image="https://th.bing.com/th/id/OIP.wBVJJYrj-E4nuZrbzsT9CAHaLH?rs=1&pid=ImgDetMain" 
              //title="Subtopic 4" 
              description="We leverage cutting-edge technology in all our projects." 
            />
          </div>

          <div>
          <h2 className="text-xl font-bold m-4">Plant & Machinery Resources</h2>
          <p className="text-lg">
           At PAV Infra Developers, we take pride in our extensive array of plant and machinery resources, which empower us to efficiently undertake projects of all magnitudes. Our modern fleet includes excavators, long reach excavators, Tele dipper, Trench Cutter, Dump trucks, Dump trucks, backhoes, loaders, motor graders, rollers, power machines, crawler dozers, dual drum rollers, water tankers, breakers, piling machines, and cranes. Our ready-mix concrete plants boast capacities of 45 cum and 60 cum, while our asphalt plants can produce up to 60 Tph. This diverse equipment range enhances our operational efficiency, reduces costs, and upholds the highest quality standards.
Our dedicated workshop, staffed with skilled mechanics, ensures routine servicing, maintenance, and repairs, including field servicing to minimize downtime. We consistently invest in our plant and equipment to maintain peak service levels and meet our clients’ varied needs. Effective management of our plant fleet enables us to deliver projects punctually, within budget, and to the highest quality and safety standards.
</p>
<h2 className="text-xl font-bold m-4">Quality Safety Management</h2>
<p className="text-lg">
At PAV Infra Developers, Safety, Health, and Environment (SHE) are of utmost importance, and we view them as fundamental legal and moral obligations. Our safety management practices are woven into every operation facet, creating a secure work environment for our employees and the public. We believe that an exemplary safety approach not only boosts employee morale and loyalty but also enhances productivity and profitability. Our safety measures are recognized, implemented, and upheld from legal, humanitarian, and economic viewpoints.
Our safety management system encompasses regular employee training, strict adherence to safety protocols, and continuous work site monitoring to identify and address potential hazards. We are committed to protecting our employees and the public from injury, annoyance, or risk during all company operations and activities. By cultivating a safety-first culture, we ensure incident-free project completion, maintaining our status as a responsible and dependable construction partner.
</p>
<h2 className="text-xl font-bold m-4">Our Engineers</h2>
<p className="text-lg">
At PAV Infra Developers, our engineering team is the cornerstone of our operations, infusing flexibility, expertise, and innovation into every endeavor. Our core project managers are comprised of graduate civil, mechanical, and industrial engineers, bolstered by in-house teams specializing in cost management, quality control, and administration. This diverse and adept team enables us to customize our services to the unique demands of each project, ensuring both efficacy and efficiency in our solutions.
Our engineers are dedicated to perpetual learning and professional growth, keeping pace with the latest industry advancements and technologies. This dedication to excellence equips us to offer cutting-edge solutions that address our clients’ evolving needs. Leveraging our engineers’ expertise, we confront complex challenges head-on and deliver projects that not only meet but surpass expectations, fostering a brighter future for our clients and the communities we serve.

          </p>
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default WhyWeStandApart;