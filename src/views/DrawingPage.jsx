import React, { useState } from "react";
import DrawingBoard from "react-drawing-board";

import { useTranslation } from "react-i18next";
import Canvas from "../components/drawing-board/Canvas";
import { DARKGREY } from "../constants/app_colors";

const DrawingPage = () => {
     const { t } = useTranslation();
     const [operations, setOperations] = useState(["null"]);

     return (
          <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
               <div className="w-75">
                    <h1>Start drawing</h1>
                    <p>
                         Every single step in this drawing is recorded. Don’t
                         use it for a personal purposes.
                    </p>
                    {/* <DrawingBoard
                    
               /> */}

                    <div className="w-100 h-75 d-flex justify-content-center align-content-center">
                         <DrawingBoard
                              style={{
                                   width: "100%",
                                   height: "100%",
                              }}
                              userId="user1" // identify for different players.
                              operations={operations}
                              onChange={(newOperation, afterOperation) => {
                                   console.log(`TODO: send ${newOperation}`);
                                   console.log(operations);
                                   console.log(newOperation);
                                   setOperations(afterOperation);
                              }}
                              className="w-50"
                         />
                    </div>

                    {/* <Canvas 
               width='900'
               height='600'
               /> */}
               </div>
          </div>
     );
};

export default DrawingPage;
