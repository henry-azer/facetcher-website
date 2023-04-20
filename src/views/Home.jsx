import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Face3D from "../assets/3D/untitled.glb";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

     const cameraRef = useRef();

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
                    rotation={[  mousePos.y / 750 +100, mousePos.x / 750 + 80,0]}
                    // rotation={[0, mousePos.x / 750 + 80,0]}
                    scale={[8, 8, 8]}
                    position={[-1, -2, 0]}
               />
          );
     }

     useEffect(() => {
          const handleMouseMove = (event) => {
               setMousePos({ x: event.clientX, y: event.clientY });
          };

          window.addEventListener("mousemove", handleMouseMove);

          return () => {
               window.removeEventListener("mousemove", handleMouseMove);
          };
     }, []);

     // document.getElementById('3d-face').appendChild(renderer.domElement);
     // document.body.appendChild(renderer.domElement);

     return (
          <div className="w-100 vh-100 ">
               <div className="w-100 h-100 row justify-content-center align-items-center">
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
                              <Canvas className="mb-5">
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

                         <button className="btn bg-cyan rounded-pill text-light-grey w-25 fw-bold mb-5">
                              Login
                         </button>
                    </div>
               </div>
          </div>
     );
};
export default Home;
