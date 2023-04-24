import React, { useState } from "react";
import DrawingBoard from "react-drawing-board";

import { useTranslation } from "react-i18next";
import Canvas from "../components/drawing-board/Canvas";
import { DARKGREY } from "../constants/app_colors";
import Header from "../components/header/header";
import { Center } from "@react-three/drei";

const DrawingPage = () => {
     const { t } = useTranslation();
     const [operations, setOperations] = useState(["null"]);

     return (
          <div className="w-100 vh-100 overflow-hidden">
               <Header bg shadow height={20} />
               <div
                    className="w-100 d-flex justify-content-center align-items-center flex-column"
                    style={{}}
               >
                    <div className="w-75">
                         <h1 className="display-5 m-0">Start drawing</h1>
                         <p>
                              Every single step in this drawing is recorded.
                              Don’t use it for a personal purposes.
                         </p>

                         <form className="w-100 h-100 d-flex flex-column">
                              <div className="d-flex justify-content-center align-items-center flex-column">
                                   <DrawingBoard
                                        style={{
                                             width: 1200,
                                             height: 500,
                                             display: "block",
                                             // margin: "12px auto",
                                        }}
                                        operations={operations}
                                        onChange={(
                                             newOperation,
                                             afterOperation
                                        ) => {
                                             console.log(
                                                  `TODO: send ${newOperation}`
                                             );
                                             console.log(operations);
                                             console.log(newOperation);
                                             setOperations(afterOperation);
                                        }}
                                   />
                                   <button className="btn bg-cyan rounded-pill w-25 text-light-grey">
                                        Next
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default DrawingPage;
