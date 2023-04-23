import React, { useEffect, useState } from "react";
// import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Face3D from "../assets/3D/untitled.glb";
import { OrbitControls } from "@react-three/drei";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { handleClickScroll } from "../utils/util";
import Header from "../components/header/header";
import { CYAN, LIGHTGREY } from "../constants/app_colors";
import FacetcherCarousel from "../components/carousel/carousel";
import { useNavigate } from "react-router-dom";
import {
     Dialog,
     DialogActions,
     DialogContent,
     DialogContentText,
     DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

     const [authenticated, setAuthenticated] = useState(false);
     const [open, setOpen] = useState(false);

     const drawings = [1, 2, 3, 4, 5, 6, 7];

     const navigate = useNavigate();

     function Model() {
          return (
               <primitive
                    object={useLoader(GLTFLoader, Face3D).scene}
                    rotation={[
                         mousePos.y / 750 + 100,
                         mousePos.x / 750 + 80,
                         0,
                    ]}
                    scale={[9, 9, 9]}
                    position={[-0.5, -2, 0]}
               />
          );
     }

     useEffect(() => {
          if (window.scrollY > 0) window.scrollTo(0, 0);
          const handleMouseMove = (event) => {
               if (window.scrollY < 500)
                    setMousePos({ x: event.clientX, y: event.clientY });
          };

          window.addEventListener("mousemove", handleMouseMove);

          return () => {
               window.removeEventListener("mousemove", handleMouseMove);
          };
     }, []);

     return (
          <div className="w-100">
               <Header />
               <div
                    className="w-100 vh-100 row justify-content-center align-items-center"
                    id="section-1"
               >
                    <div className="col position-relative d-flex justify-content-center align-items-center flex-column">
                         <div className="w-75 d-flex flex-column">
                              <h1 className="display-1">From Sketch</h1>
                              <h1 className="text-cyan fw-bold display-1 align-self-end">
                                   To Life
                              </h1>
                              <figcaption className=" blockquote-footer text-grey">
                                   <cite title="Source Title">
                                        FACETCHER ...{" "}
                                   </cite>
                                   What we try to do is to reach the criminal
                                   together and get the best result in the
                                   shortest time.{" "}
                              </figcaption>
                         </div>
                         <div
                              className=" bg-cyan rounded-circle position-absolute circle"
                              style={{
                                   width: 150,
                                   height: 150,
                                   bottom: `${mousePos.y / 30 + 120}px`,
                                   left: `${mousePos.x / 30 + 20}px`,
                              }}
                         ></div>
                         <div
                              className="bg-dark-grey2 rounded-circle position-absolute circle"
                              style={{
                                   width: 300,
                                   height: 300,
                                   top: `${mousePos.x / 30 + 40}px`,
                                   right: `${mousePos.y / 30}px`,
                              }}
                         ></div>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center flex-column w-100 h-100">
                         <Canvas className="my-5">
                              <OrbitControls
                                   enableZoom={false}
                                   enableRotate={false}
                                   autoRotate={false}
                                   autoRotateSpeed={1}
                              />
                              <ambientLight intensity={0.3} />
                              <pointLight
                                   position={[12, 300, 50]}
                                   angle={0.2}
                              />
                              <pointLight
                                   position={[-mousePos.x, -mousePos.y, 50]}
                                   intensity={0.5}
                                   color={CYAN}
                              />
                              <Model />
                         </Canvas>

                         {!authenticated ? (
                              <>
                                   <Dialog
                                        open={open}
                                        onClose={() => setOpen(false)}
                                        PaperProps={{
                                             sx: {
                                                  bgcolor: LIGHTGREY,
                                                  // color: DARKGREY2,
                                                  paddingY: 2,
                                                  borderRadius: 3,
                                             },
                                        }}
                                   >
                                        {" "}
                                        <DialogTitle className="d-flex w-100 px-5 justify-content-between fw-bold">
                                             Login
                                             <CloseIcon
                                                  className="cursor-pointer text-dark-grey2"
                                                  onClick={() => setOpen(false)}
                                             />
                                        </DialogTitle>
                                        <DialogContent className="d-flex w-100 px-5 flex-column">
                                             <DialogContentText className="pb-3 text-dark-grey2">
                                                  Please, Use your generated
                                                  account that you received from
                                                  us.
                                             </DialogContentText>

                                             <div>
                                                  <button
                                                       className="btn bg-cyan rounded-pill w-25 text-light-grey"
                                                       onClick={() => {
                                                            setOpen(false);
                                                            setAuthenticated(
                                                                 true
                                                            );
                                                            setTimeout(
                                                                 () =>
                                                                      handleClickScroll(
                                                                           "section-2"
                                                                      ),
                                                                 500
                                                            );
                                                       }}
                                                  >
                                                       Login
                                                  </button>
                                             </div>
                                        </DialogContent>
                                        <DialogActions></DialogActions>
                                   </Dialog>
                                   <div
                                        onClick={() => setOpen(true)}
                                        className="w-20 fw-bold ms-5 mb-5 border-top-0 border-start-0 border-end-0 light-grey-border cursor-pointer position-relative circle-btn"
                                   >
                                        <h1 className=" display-6">Login</h1>
                                        <div
                                             className=" bg-dark-grey2 rounded-circle position-absolute circle btn-circle"
                                             style={{
                                                  width: 80,
                                                  height: 80,
                                                  bottom: "-2px",
                                                  left: "60px",
                                             }}
                                        ></div>
                                   </div>
                              </>
                         ) : (
                              <div
                                   onClick={() =>
                                        handleClickScroll("section-2")
                                   }
                                   className="w-20 fw-bold ms-5 mb-5 cursor-pointer position-relative"
                              >
                                   <h1 className=" fs-5 scroll-down">
                                        Scroll Down{" "}
                                        <KeyboardArrowDownIcon className="down-arrow" />
                                   </h1>
                              </div>
                         )}
                    </div>
               </div>
               {authenticated && (
                    <div
                         className="vh-100 w-100 bg-dark-grey2 d-flex justify-content-center align-items-center"
                         id="section-2"
                    >
                         <div className="w-75 h-75 d-flex justify-content-center align-items-center flex-column">
                              <h1 className="display-6 align-self-start">
                                   Your History
                              </h1>

                              <div className="w-100 h-75">
                                   <FacetcherCarousel>
                                        {drawings.map((element) => (
                                             <div
                                                  key={element}
                                                  className="rounded-4 bg-light-grey position-relative overflow-hidden"
                                                  style={{
                                                       width: 150,
                                                       height: 150,
                                                  }}
                                             >
                                                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark-grey opacity-50">
                                                       {element}
                                                  </div>
                                             </div>
                                        ))}
                                   </FacetcherCarousel>
                              </div>

                              <div
                                   style={{ zIndex: 1 }}
                                   onClick={() => navigate("/drawing-page")}
                                   className="w-25 d-flex justify-content-end fw-bold ms-5 mb-5 border-top-0 border-start-0 border-end-0 light-grey-border cursor-pointer position-relative circle-btn"
                              >
                                   <h1 className=" display-6">Start Drawing</h1>
                                   <div
                                        className=" bg-dark-grey rounded-circle position-absolute circle btn-circle"
                                        style={{
                                             width: 70,
                                             height: 70,
                                             bottom: "2px",
                                             left: "-11px",
                                        }}
                                   ></div>
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
};
export default Home;
