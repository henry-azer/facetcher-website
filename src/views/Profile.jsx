import React from "react";
import Header from "../components/header/header";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
     return (
          <div className="w-100 min-vh-100">
               <Header fixed />
               <div className="w-100 vh-100 d-flex justify-content-center align-items-center ">
                    <div className="w-100 h-100 position-relative">
                         <div
                              className="position-absolute w-75 d-flex justify-content-between"
                              style={{
                                   height: 350,
                                   top: 250,
                                   left: 250,
                              }}
                         >
                              <div
                                   className="h-100 bg-light-grey rounded-circle user-profile-pic overflow-hidden d-flex justify-content-center align-items-center light-grey-border"
                                   style={{
                                        width: 350,
                                   }}
                              >
                                   <div className="w-100 h-100 bg-grey rounded-circle d-flex justify-content-center align-items-center">
                                        <h1 className=" display-1">MA</h1>
                                   </div>
                              </div>
                              <div className="w-50 d-flex justify-content-between flex-column">
                                   <div>
                                        <h1 className="fs-5 text-grey">
                                             Displayed Name
                                        </h1>
                                        <h1 className="fs-4 fw-bold">
                                             User Name
                                        </h1>
                                   </div>
                                   <div>
                                        <h1 className="fs-5 text-grey">
                                             Phone Number
                                        </h1>
                                        <h1 className="fs-4 fw-bold">
                                             +20 1234567891
                                        </h1>
                                   </div>
                                   <div>
                                        <h1 className="fs-5 text-grey">
                                             Email Address
                                        </h1>
                                        <h1 className="fs-4 fw-bold">
                                             user@facetcher.com
                                        </h1>
                                   </div>
                                   <div>
                                        <h1 className="fs-5 text-grey">
                                             Password
                                        </h1>
                                        <h1 className="fs-4 fw-bold d-flex justify-content-between w-75 align-content-center">
                                             ************{" "}
                                             <EditIcon
                                                  fontSize="small"
                                                  className="ms-2 light-grey-border rounded-2 cursor-pointer"
                                             />
                                        </h1>
                                   </div>
                              </div>
                         </div>
                         <div
                              className="overflow-hidden rounded-5 position-absolute shadow"
                              style={{
                                   width: 450,
                                   height: 450,
                                   rotate: "45deg",
                                   top: 200,
                                   left: -150,
                                   zIndex: -1,
                              }}
                         >
                              <div className="gradient-background w-100 h-100 position-absolute top-0 start-0"></div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
export default Profile;
