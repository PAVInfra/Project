import React from 'react';
import "./App.css";

import Footer from "./components/Footer";
import Content from "./Content";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import StickyButton from "./components/StickyButton";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App mt-16" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: "1", minHeight: "100vh" }}>
          <Content />
          <StickyButton />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
