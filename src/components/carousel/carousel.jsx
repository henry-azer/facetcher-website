import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LIGHTGREY } from "../../constants/app_colors";

const FacetcherCarousel = (props) => {
     const [num, setNum] = useState(0);

     function mod(a, n) {
          return a - n * Math.floor(a / n);
     }

     return (
          <div className="w-100 h-100">
               <div className=" w-100 h-100  d-flex justify-content-center align-items-center">
                    <ArrowBackIosIcon
                         className="cursor-pointer text-light-grey"
                         onClick={() => {
                              if (num === 0) setNum(props.children.length);
                              else setNum(num - 1);
                              console.log(num);
                         }}
                    />
                    {props.children && (
                         <>
                              {props.children.length !== 0 ? (
                                   <>
                                        {props.children.length >= 3 && (
                                             <div className="w-75 d-flex justify-content-between align-items-center">
                                                  {props.children.length >=
                                                       5 && (
                                                       <div className="down-scale opacity-50">
                                                            {
                                                                 props.children[
                                                                      mod(
                                                                           num -
                                                                                2,
                                                                           props
                                                                                .children
                                                                                .length
                                                                      )
                                                                 ]
                                                            }
                                                       </div>
                                                  )}
                                                  <div className=" opacity-75">
                                                       {
                                                            props.children[
                                                                 mod(
                                                                      num - 1,
                                                                      props
                                                                           .children
                                                                           .length
                                                                 )
                                                            ]
                                                       }
                                                  </div>
                                                  <div className="up-scale mx-5">
                                                       {
                                                            props.children[
                                                                 mod(
                                                                      num,
                                                                      props
                                                                           .children
                                                                           .length
                                                                 )
                                                            ]
                                                       }
                                                  </div>
                                                  <div className=" opacity-75">
                                                       {
                                                            props.children[
                                                                 mod(
                                                                      num + 1,
                                                                      props
                                                                           .children
                                                                           .length
                                                                 )
                                                            ]
                                                       }
                                                  </div>
                                                  {props.children.length >=
                                                       5 && (
                                                       <div className="down-scale opacity-50">
                                                            {
                                                                 props.children[
                                                                      mod(
                                                                           num +
                                                                                2,
                                                                           props
                                                                                .children
                                                                                .length
                                                                      )
                                                                 ]
                                                            }
                                                       </div>
                                                  )}
                                             </div>
                                        )}
                                   </>
                              ) : (
                                   <div
                                        className="d-flex justify-content-center align-items-center"
                                        style={{ width: 450, height: 450 }}
                                   >
                                        <h1 className="display-6 text-light-grey">
                                             No Submissions Yet
                                        </h1>
                                   </div>
                              )}
                         </>
                    )}
                    <ArrowForwardIosIcon
                         className="cursor-pointer text-light-grey"
                         onClick={() => {
                              if (num === props.children.length) setNum(0);
                              else setNum(num + 1);
                              console.log(num);
                         }}
                    />
               </div>
          </div>
     );
};
export default FacetcherCarousel;
