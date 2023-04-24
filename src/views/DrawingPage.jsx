import React, { useState } from "react";
import DrawingBoard from "react-drawing-board";

import { useTranslation } from "react-i18next";
import Canvas from "../components/drawing-board/Canvas";
import { DARKGREY } from "../constants/app_colors";
import Header from "../components/header/header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FacetcherSelectComponent from "../components/select-component";

const DrawingPage = () => {
     const { t } = useTranslation();
     const [operations, setOperations] = useState(["null"]);
     const [formNumber, setFormNumber] = useState(0);

     return (
          <div className="w-100 vh-100 overflow-hidden">
               <Header bg shadow height={20} />
               <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                    <div className="w-75 h-100">
                         <form className="w-100 h-100 d-flex flex-column">
                              {formNumber === 0 ? (
                                   <div className="w-100 h-75 d-flex justify-content-center flex-column">
                                        <h1 className="fw-bold m-0">
                                             Add drawing details
                                        </h1>
                                        <p className="text-grey">
                                             Enter all the details and
                                             description for the drawing, as all
                                             what you do here is recorded.
                                        </p>
                                        <div className="w-100 h-100 d-flex justify-content-between align-items-center flex-column">
                                             <input
                                                  type="text"
                                                  className="bg-transparent rounded-pill w-100 text-light-grey ps-3 py-2 fs-3 grey-border"
                                             placeholder="Title"
                                             />
                                             <FacetcherSelectComponent
                                                  width="100"
                                                  label="Choose the drawing gender"
                                                  options={[
                                                       "Gender...",
                                                       "Male",
                                                       "Female",
                                                  ]}
                                                  defaultValue
                                             />
                                             <textarea
                                             placeholder="What do you think about that ..."
                                             type="text" className="h-50 d-flex w-100 bg-transparent rounded-5 text-light-grey ps-3 py-2 fs-6 grey-border" />
                                             <button
                                                  onClick={() =>
                                                       setFormNumber(1)
                                                  }
                                                  className="btn bg-cyan rounded-pill w-25 text-light-grey fw-bold"
                                             >
                                                  Next <ArrowForwardIcon />
                                             </button>
                                        </div>
                                   </div>
                              ) : (
                                   <>
                                        <h1 className="fw-bold m-0">
                                             Start drawing
                                        </h1>
                                        <p className="text-grey">
                                             Every single step in this drawing
                                             is recorded. Don’t use it for a
                                             personal purposes.
                                        </p>
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                             <DrawingBoard
                                                  style={{
                                                       width: 1150,
                                                       height: 500,
                                                       display: "block",
                                                       margin: "12px auto",
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
                                                       console.log(
                                                            newOperation
                                                       );
                                                       setOperations(
                                                            afterOperation
                                                       );
                                                  }}
                                             />
                                             <div className="w-100 d-flex justify-content-between">
                                                  <button
                                                       onClick={() =>
                                                            setFormNumber(0)
                                                       }
                                                       style={{
                                                            width: 55,
                                                            height: 55,
                                                       }}
                                                       className="btn bg-dark-grey2 rounded-circle text-light-grey fw-bold"
                                                  >
                                                       <ArrowBackIcon />
                                                  </button>
                                                  <button className="btn bg-cyan rounded-pill w-25 text-light-grey fw-bold">
                                                       Get the result
                                                  </button>
                                             </div>
                                        </div>
                                   </>
                              )}
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default DrawingPage;
