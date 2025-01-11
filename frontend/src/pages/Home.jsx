import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "react-typewriter-effect";
import "../assets/css/Home.css";
import Graph from "../components/Graph";
import Machines from "../components/Machines";
import Maps2 from "../components/Maps2";
import MyCarousel from "../components/MyCarousel";
import { getAwards } from "../Services/HomeService";

const Home = () => {
  const [awards, setAwards] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (awards.length > 0) return;

    getAwards().then((data) => {
      if (mounted) {
        setAwards(data);
        console.log(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, [awards]);

  const handlepro = (customerName) => {
    console.log(customerName);
    navigate("/cbproject", { state: { customerName } });
  };

  return (
    <>
      <MyCarousel />

      <div className="flex justify-center items-center mt-10">
        <Typewriter
          textStyle={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            color: "#1a202c", // Change color as per your theme
            fontSize: "2.5rem",
          }}
          startDelay={200}
          cursorColor="#3f3f3f"
          text="WELCOME TO Pav Infra Developers!"
          typeSpeed={100}
          scrollArea={null}
        />
      </div>
      {/* <div className="text-4xl font-bold pt-10 justify-left text-left">
        Awards & Achievements
      </div>

      <section className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{award.title}</h2>
                  <p className="text-gray-600">{award.shortDescription}</p>
                  <span className="text-gray-500">{award.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <Graph />
      <Machines />

      <div className="flex flex-col items-center justify-center h-screen text-center">
        <Maps2 />
      </div>
      <div className="flex flex-col lg:flex-row m-8 min-h-screen text-center">
        <div className="flex flex-col mb-8 lg:mb-0 lg:mr-8 items-center">
          <h3>Company Location</h3>
          <iframe
            title="company location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.005337277813!2d80.24518407484256!3d13.035331887285919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52675e2a15437d%3A0x6d03c2f465632a86!2sPAV%20Infra%20Developers!5e0!3m2!1sen!2sin!4v1720330275268!5m2!1sen!2sin"
            // width="100%"
            // height="100%"
            style={{
              width: "45vw",
              height: "60vh",
              border: 0,
              minWidth: "300px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col">
          <h3>Our Clients</h3>
          <div className="flex flex-wrap gap-2 m-2 justify-center">
            <img
              src="https://www.ivrcl.com/images/logo.png"
              className="logo w-32 h-32 object-contain"
              onClick={(e) => handlepro(e.target.alt)}
              alt="chigon"
            />
            <img
              src="https://transrail.in/images/logo.png"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="https://ntpcntecljv.co.in/img/ntecl_logo.png"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="http://www.gammonindia.com/images/logo.gif"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="https://hccindia.com/frontend//images/logo.jpg"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="https://www.pandc.co.in/images/logo.png"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="https://www.afcons.com/themes/afcons/assets/images/afcons-logo.png"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="https://sical.in/wp-content/uploads/2023/02/sical-web-new-logo.png"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="https://www.itdcem.co.in/wp-content/themes/itd/images/logo_stable.jpg"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="http://www.ennoreport.gov.in/content/images/kamarajar-port-limited-logo.png"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="https://www.splinfra.com/images/inner-page/1.jpg"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src="https://www.tataprojects.com/wp-content/uploads/2023/02/tata-projects-logo.png"
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt=""
            />
            <img
              src=""
              className="logo w-32 h-32 object-contain"
              onClick={handlepro}
              alt="SRINIVASA EDIFICE"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
