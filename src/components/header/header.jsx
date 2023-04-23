import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo/logo.svg";
import LogoText from "../../assets/logo/logo-text.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
     const headerElements = ["home", "about us", "help"];

     const navigate = useNavigate();
     const location = useLocation();

     const [scrollY, setScrollY] = useState(0);
     const [wide, setWide] = useState(true);

     useEffect(() => {
          const handleScroll = () => setScrollY(window.scrollY);
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     useEffect(() => {
          if (scrollY > 60) setWide(false);
          else setWide(true);
     }, [scrollY]);

     return (
          <div
               className={`w-100 px-5 position-fixed top-0 header ${
                    !wide ? "bg-dark-grey2" : ""
               }`}
               style={{ height: `${wide ? "100px" : "50px"}` }}
          >
               <div className="w-100 h-100 px-5 py-3 d-flex justify-content-between align-items-center">
                    <div
                         className=" d-flex justify-content-center align-items-center ms-3 cursor-pointer"
                         onClick={() => {
                              if (location.pathname === "/")
                                   window.scroll(0, 0);
                              else navigate("/");
                         }}
                    >
                         {wide && (
                              <img
                                   src={Logo}
                                   className="h-100 me-2"
                                   alt="Logo"
                              />
                         )}
                         <img
                              src={LogoText}
                              className={!wide ? "small-logo" : ""}
                              alt="Logo"
                         />
                    </div>

                    <div className="w-25 d-flex justify-content-between align-items-center me-3">
                         {headerElements.map((element, index) => (
                              <h1
                                   key={index}
                                   className={`${
                                        wide ? "fs-5" : "fs-6 wide"
                                   } m-0 border-top-0 border-start-0 border-end-0 light-grey-border text-uppercase header-element cursor-pointer position-relative`}
                              >
                                   {element}
                              </h1>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default Header;
