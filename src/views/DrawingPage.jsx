import React, { useState } from "react";
import DrawingBoard from "react-drawing-board";

import { useTranslation } from "react-i18next";
import Canvas from "../components/drawing-board/Canvas";
import { DARKGREY } from "../constants/app_colors";
import Header from "../components/header/header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import FacetcherSelectComponent from "../components/select-component";
import { useNavigate } from "react-router-dom";

const DrawingPage = () => {
     const { t } = useTranslation();
     const [operations, setOperations] = useState(["null"]);
     const [formNumber, setFormNumber] = useState(0);

     const navigate = useNavigate();

     return (
          <div className="w-100 vh-100 overflow-hidden">
               <Header bg shadow height={20} />
               <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                    <div className="w-75 h-100">
                         <form className="w-100 h-100 d-flex flex-column">
                              {formNumber === 0 && (
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
                                                  defaultValue="Gender..."
                                             />
                                             <textarea
                                                  placeholder="What do you think about that ..."
                                                  type="text"
                                                  className="h-50 d-flex w-100 bg-transparent rounded-5 text-light-grey p-3 fs-6 grey-border"
                                             />
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
                              )}
                              {formNumber === 1 && (
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
                                                  <button
                                                       className="btn bg-cyan rounded-pill w-25 text-light-grey fw-bold"
                                                       onClick={() =>
                                                            setFormNumber(2)
                                                       }
                                                  >
                                                       Get the result
                                                  </button>
                                             </div>
                                        </div>
                                   </>
                              )}
                              {formNumber === 2 && (
                                   <div className="w-100 h-75 d-flex justify-content-around align-items-center flex-column">
                                        <div className="w-100">
                                             <h1 className="fw-bold">
                                                  The Required
                                             </h1>
                                             <p className="text-grey">
                                                  It’s the required person
                                                  according your gender choice
                                                  and your drawing. If it’s not
                                                  the person you need please let
                                                  us know.
                                             </p>
                                        </div>
                                        <div className="h-75 w-100 d-flex justify-content-center align-items-center">
                                             <div className="bg-grey w-50 h-100 rounded-5"></div>
                                        </div>
                                        <div className="w-50 d-flex justify-content-between mt-4">
                                             <button
                                                  onClick={() =>
                                                       setFormNumber(1)
                                                  }
                                                  className="btn bg-transparent rounded-pill grey-border w-25 text-light-grey fw-bold"
                                             >
                                                  Edit{" "}
                                                  <EditIcon className="ms-2 light-grey-border rounded-2" />
                                             </button>
                                             <button
                                                  onClick={() =>
                                                       setFormNumber(3)
                                                  }
                                                  className="btn bg-cyan rounded-pill w-50 text-light-grey fw-bold"
                                             >
                                                  Next <ArrowForwardIcon />
                                             </button>
                                        </div>
                                   </div>
                              )}
                              {formNumber === 3 && (
                                   <div className="w-100 h-75 d-flex justify-content-around align-items-center flex-column">
                                        <div className="w-100">
                                             <h1 className="fw-bold m-0">
                                                  Submit
                                             </h1>
                                             <p className="text-grey">
                                                  Please, Make sure from all
                                                  your data that you entered as
                                                  in this step all the data are
                                                  going to be submitted and all
                                                  case details will be saved in
                                                  your history.
                                             </p>
                                        </div>
                                        <div className="row h-75 w-100 mt-3 d-flex justify-content-center align-items-center">
                                             <div className="col-6 h-25 d-flex justify-content-between align-items-center px-5">
                                                  <h1 className="fw-bold fs-4 m-0">
                                                       Details
                                                  </h1>
                                                  <EditIcon
                                                       onClick={() =>
                                                            setFormNumber(0)
                                                       }
                                                       className="ms-2 text-light-grey light-grey-border rounded-2 cursor-pointer"
                                                  />
                                             </div>
                                             <div className="col-6 h-25 d-flex justify-content-between align-items-center px-5">
                                                  <h1 className="fw-bold fs-4 m-0">
                                                       Your drawing and output
                                                  </h1>
                                                  <EditIcon
                                                       onClick={() =>
                                                            setFormNumber(1)
                                                       }
                                                       className="ms-2 text-light-grey light-grey-border rounded-2 cursor-pointer"
                                                  />
                                             </div>
                                             <div className="col-6 h-75 d-flex justify-content-center flex-column px-5">
                                                  <div className="h-100 d-flex justify-content-around flex-column">
                                                       <h1 className="fs-6 text-grey">
                                                            <span className="fw-bold">
                                                                 Title:
                                                            </span>{" "}
                                                            Title
                                                       </h1>
                                                       <h1 className="fs-6 text-grey">
                                                            <span className="fw-bold">
                                                                 Gender:
                                                            </span>{" "}
                                                            Male
                                                       </h1>
                                                       <h1 className="fs-6 text-grey">
                                                            <span className="fw-bold">
                                                                 Description:
                                                            </span>{" "}
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Blanditiis
                                                            aspernatur tenetur
                                                            sed totam quos nemo,
                                                            reprehenderit, ex in
                                                            dolore neque
                                                            eveniet. Esse,
                                                            sapiente cumque!
                                                            Ullam saepe dolores
                                                            iure ea dignissimos.
                                                       </h1>
                                                  </div>
                                             </div>
                                             <div className="col-6 h-75 d-flex justify-content-center flex-column px-5">
                                                  <div className="row h-75 w-100">
                                                       <div className="col h-100 p-2">
                                                            <div className="w-100 h-100 rounded-5 bg-light-grey"></div>
                                                       </div>
                                                       <div className="col h-100 p-2">
                                                            <div className="w-100 h-100 rounded-5 bg-light-grey"></div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="w-50 d-flex justify-content-center mt-4">
                                             <button
                                                  onClick={() => navigate("/")}
                                                  className="btn bg-cyan rounded-pill w-50 text-light-grey fw-bold"
                                             >
                                                  Submit
                                             </button>
                                        </div>
                                   </div>
                              )}
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default DrawingPage;
