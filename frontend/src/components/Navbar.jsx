import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "./PAV.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <nav className="bg-sky-500 bg-opacity-75 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>
          <div className="hidden md:flex">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
              >
                Home
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={handleDropdownToggle}
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline flex items-center"
                >
                  About Us
                  <FaChevronDown className="ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-opacity-95 bg-sky-400 ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                      onClick={handleDropdownToggle}
                    >
                      <Link
                        to="/about/whoarewe"
                        className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                        role="menuitem"
                      >
                        Who are We
                      </Link>
                      <Link
                        to="/about/missionandvision"
                        className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                        role="menuitem"
                      >
                        Mission and Vission
                      </Link>
                      <Link
                        to="/about/standingapart"
                        className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                        role="menuitem"
                      >
                        Why We Stand Apart
                      </Link>
                      <Link
                        to="/about/socialactivities"
                        className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
                        role="menuitem"
                      >
                        Social Activities
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/services"
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
              >
                Services
              </Link>
              <Link
                to="/project"
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
              >
                Projects
              </Link>
              <Link
                to="/portfolio"
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
              >
                MD's Desk
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 text-white focus:outline-none"
            >
              {navOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${navOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
          >
            Home
          </Link>
          <div>
            <button
              onClick={handleDropdownToggle}
              className="flex justify-between items-center w-full text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
            >
              About Us
              <FaChevronDown />
            </button>
            {dropdownOpen && (
              <div className="pl-4" onClick={handleDropdownToggle}>
                <Link
                  to="/about/whoarewe"
                  className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-medium no-underline"
                >
                  Who are We
                </Link>
                <Link
                  to="/about/missionandvision"
                  className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-medium no-underline"
                >
                  Mission and Vission
                </Link>
                <Link
                  to="/about/standingapart"
                  className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-medium no-underline"
                >
                  Why We Stand Apart
                </Link>
                <Link
                  to="/about/socialactivities"
                  className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-medium no-underline"
                >
                  Social Activities
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/services"
            className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
          >
            Services
          </Link>
          <Link
            to="/project"
            className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
          >
            Projects
          </Link>
          <Link
            to="/portfolio"
            className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
          >
            MD's Desk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "./PAV.png";

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const handleToggle = () => {
//     setNavOpen(!navOpen);
//   };

//   return (
//     <nav className="bg-sky-500 bg-opacity-75 shadow-lg fixed top-0 left-0 w-full z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="text-3xl font-bold">
//               <img src={logo} alt="Logo" className="h-10" />
//             </Link>
//           </div>
//           <div className="hidden md:flex">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 to="/"
//                 className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/services"
//                 className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//               >
//                 Services
//               </Link>
//               <Link
//                 to="/project"
//                 className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//               >
//                 Projects
//               </Link>
//               <Link
//                 to="/portfolio"
//                 className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//               >
//                 MD's Desk
//               </Link>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={handleToggle}
//               className="inline-flex items-center justify-center p-2 text-white focus:outline-none"
//             >
//               {navOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={`md:hidden ${navOpen ? "block" : "hidden"}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link
//             to="/"
//             className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//           >
//             About Us
//           </Link>
//           <Link
//             to="/services"
//             className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//           >
//             Services
//           </Link>
//           <Link
//             to="/project"
//             className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//           >
//             Projects
//           </Link>
//           <Link
//             to="/portfolio"
//             className="block text-white hover:text-blue-200 px-3 py-2 rounded-md text-xl font-medium no-underline"
//           >
//             Portfolio
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
