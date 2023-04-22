import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Face3D from "../assets/3D/untitled.glb";
import { OrbitControls } from "@react-three/drei";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { handleClickScroll } from "../utils/util";
import Header from "../components/header/header";

const Home = () => {
     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
     // const [yPosition, setYPosition] = useState(0);

     const [authenticated, setAuthenticated] = useState(false);

     // const scene = new THREE.Scene();
     // const camera = new THREE.PerspectiveCamera(
     //      75,
     //      window.innerWidth / window.innerHeight,
     //      0.1,
     //      1000
     // );

     // const renderer = new THREE.WebGLRenderer();
     // renderer.setSize(window.innerWidth, window.innerHeight);

     // const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

     function Model() {
          // const gltf = useLoader(GLTFLoader, "");
          return (
               <primitive
                    object={useLoader(GLTFLoader, Face3D).scene}
                    rotation={[
                         mousePos.y / 750 + 100,
                         mousePos.x / 750 + 80,
                         0,
                    ]}
                    // rotation={[0, mousePos.x / 750 + 80,0]}
                    scale={[9, 9, 9]}
                    position={[-0.5, -2, 0]}
               />
          );
     }

     useEffect(() => {
          if (window.scrollY > 0) window.scrollTo(0, 0);
          const handleMouseMove = (event) => {
               if (window.scrollY < 600)
                    setMousePos({ x: event.clientX, y: event.clientY });
          };

          window.addEventListener("mousemove", handleMouseMove);

          return () => {
               window.removeEventListener("mousemove", handleMouseMove);
          };
     }, []);

     // console.log("new update ");
     // useEffect(() => {
     //      if (window.scrollY > yPosition) console.log("down");
     //      else console.log("up");
     //      setYPosition(window.scrollY);
     // }, [window.scrollY]);

     // document.getElementById('3d-face').appendChild(renderer.domElement);
     // document.body.appendChild(renderer.domElement);
     // console.log(yPosition);

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
                         {/* <div id="3d-face"></div> */}
                         {/* <div style={{ height: "80%" }}> */}
                         <Canvas className="my-5">
                              <OrbitControls
                                   enableZoom={false}
                                   enableRotate={false}
                                   // rotateSpeed={8}
                                   // rotation={false}
                                   // camera={camera}

                                   autoRotate={false}
                                   autoRotateSpeed={1}
                              />
                              <ambientLight intensity={0.3} />
                              <pointLight
                                   position={[12, 300, 50]}
                                   angle={0.2}
                              />
                              <Model />
                         </Canvas>
                         {/* </div> */}

                         {/* <button className="btn btn-lg bg-cyan rounded-pill text-light-grey w-25 fw-bold ms-5 mb-5">
                              Login
                         </button> */}

                         {!authenticated ? (
                              <div
                                   onClick={() => setAuthenticated(true)}
                                   className="w-20 fw-bold ms-5 mb-5 border-top-0 border-start-0 border-end-0 light-grey-border cursor-pointer position-relative login-btn"
                              >
                                   <h1 className=" display-6">Login</h1>
                                   <div
                                        className=" bg-dark-grey2 rounded-circle position-absolute circle login-circle"
                                        style={{
                                             width: 80,
                                             height: 80,
                                             bottom: "-2px",
                                             left: "60px",
                                             // bottom: `${mousePos.y / 30 + 120}px`,
                                             // left: `${mousePos.x / 30 + 20}px`,
                                        }}
                                   ></div>
                                   {/* <hr className=" text-light-grey" /> */}
                              </div>
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
                         className="vh-100 w-100 bg-dark-grey2 py-5"
                         id="section-2"
                    >
                         <h1 className="display-1">User History</h1>
                    </div>
               )}
          </div>
     );
};
export default Home;
