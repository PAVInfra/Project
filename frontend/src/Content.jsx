import React from 'react';
import { Routes, Route } from "react-router-dom";
import Service from "./components/servicecomponents/Service";
import Project from "./pages/Project";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Home from './pages/Home';
import VisionMission from './components/VisionMission';
import WhyWeStandApart from './components/WhyWeStandApart';
import WhoWeAre from './components/WhoWeAre';
import SocialActivities from './components/SocialActivites';
import CBProject from './components/CBprojects';
import Graph from './components/Graph';
const Content = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/cbproject" element={<CBProject />} />
      <Route path="/about/missionandvision" element={<VisionMission />} />
      <Route path="/about/whoarewe" element={<WhoWeAre />} />
      <Route path="/about/standingapart" element={<WhyWeStandApart />} />
      <Route path="/about/socialactivities" element={<SocialActivities />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Service />} />
    </Routes>
  );
};
export default Content;
