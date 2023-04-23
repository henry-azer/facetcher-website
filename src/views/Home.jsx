import React, { useEffect, useState } from "react";
// import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Face3D from "../assets/3D/untitled.glb";
import { OrbitControls } from "@react-three/drei";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { handleClickScroll } from "../utils/util";
import Header from "../components/header/header";
import { CYAN } from "../constants/app_colors";
import FacetcherCarousel from "../components/carousel/carousel";

const Home = () => {
     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
     // const [yPosition, setYPosition] = useState(0);

     const [authenticated, setAuthenticated] = useState(false);
     const drawings = [1, 2, 3, 4, 5, 6, 7];
     // const slides = [
     //      {
     //           key: uuidv4(),
     //           content: (
     //                <div
     //                     className=" rounded-4 bg-light-grey position-relative overflow-hidden"
     //                     style={{ width: 150, height: 150 }}
     //                >
     //                     <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark-grey opacity-50"></div>
     //                     <h1 className=" display-4 text-dark-grey2">1</h1>
     //                </div>
     //           ),
     //      },
     //      {
     //           key: uuidv4(),
     //           content: (
     //                <img src="https://picsum.photos/800/800/?random" alt="2" />
     //           ),
     //      },
     //      {
     //           key: uuidv4(),
     //           content: (
     //                <img src="https://picsum.photos/600/800/?random" alt="3" />
     //           ),
     //      },
     //      {
     //           key: uuidv4(),
     //           content: (
     //                <img src="https://picsum.photos/800/500/?random" alt="4" />
     //           ),
     //      },
     //      {
     //           key: uuidv4(),
     //           content: (
     //                <img src="https://picsum.photos/800/800/?random" alt="5" />
     //           ),
     //      },
     //      {
     //           key: uuidv4(),
     //           content: (
     //                <img src="https://picsum.photos/500/800/?random" alt="6" />
     //           ),
     //      },
     //      {
     //           key: uuidv4(),
     //           content: (
     //                <img src="https://picsum.photos/800/600/?random" alt="7" />
     //           ),
     //      },
     //      {
     //           key: uuidv4(),
     //           content: (
     //                <img src="https://picsum.photos/800/800/?random" alt="8" />
     //           ),
     //      },
     // ];
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
          // if (window.scrollY > 0) window.scrollTo(0, 0);
          const handleMouseMove = (event) => {
               if (window.scrollY < 500)
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
                                   // color={CYAN}
                              />
                              <pointLight
                                   position={[-mousePos.x, -mousePos.y, 50]}
                                   // angle={0.2}
                                   intensity={0.5}
                                   color={CYAN}
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
                         className="vh-100 w-100 bg-dark-grey2 d-flex justify-content-center align-items-center"
                         id="section-2"
                    >
                         <div className="w-75 h-75 d-flex justify-content-center align-items-center flex-column">
                              <h1 className="display-6 align-self-start">
                                   Your History
                              </h1>

                              {/* {drawings.map((element) => ( */}

                              {/* <Carousel
                                        // margin="0 auto"
                                        // height="100%"
                                        // width="100%"
                                        slides={slides}
                                        offsetRadius={8}
                                        showArrows={true}
                                        showNavigation={true}

                                        // className="w-100 h-25"
                                   /> */}

                              {/* ))} */}
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
                                                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark-grey opacity-50">{element}</div>
                                             </div>
                                        ))}
                                   </FacetcherCarousel>
                              </div>

                              <div
                                   style={{ zIndex: 1 }}
                                   // onClick={() => setAuthenticated(true)}

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
                                   {/* <hr className=" text-light-grey" /> */}
                              </div>
                         </div>
                    </div>
               )}
          </div>
     );
};
export default Home;
