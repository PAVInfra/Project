import React from "react";
import {
  IoCall,
  IoLocation,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoMail,
} from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between p-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2 text-[#4a474d]">CONTACT US</h1>
          <p className="text-gray-700 leading-6">
            <div className="flex items-center mb-2 text-[#4a474d]">
              <IoLocation className="mr-2 text-[#4a474d]" /> No.55, Kavinger
              Bharathidasan Road, Seethammal
              <br />
              Colony Extension, Teynampet, Chennai - 600 018.
            </div>
            <div className="flex items-center mb-2 text-[#4a474d]">
              <TbWorldWww className="mr-2 text-[#4a474d]" />
              <a
                href="https://www.pavinfradevelopers.com"
                className="text-[#4a474d] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.pavinfradevelopers.com
              </a>
            </div>
            <div className="flex items-center mb-2 text-[#4a474d]">
              <IoMail className="mr-2 text-[#4a474d]" />{" "}
              pavinfradevelopers@gmail.com
            </div>
            <div className="flex items-center text-[#4a474d]">
              <IoCall className="mr-2 text-[#4a474d]" /> 044 4864 5136
            </div>
          </p>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <div className="flex space-x-4 mb-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram size={30} className="text-[#4a474d]" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube size={30} className="text-[#4a474d]" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook size={30} className="text-[#4a474d]" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin size={30} className="text-[#4a474d]" />
            </a>
          </div>
          <div className="text-sm text-[#4a474d]">
            &copy; PAV Infra Developers 2024. All rights reserved for now.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
