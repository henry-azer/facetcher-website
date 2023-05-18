import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { authenticateUser } from "../store/actions/auth/auth-actions";
import { isUserAuthenticated } from "../authentication/check-authentication";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
     const [mousePosSecTwo, setMousePosSecTwo] = useState({ x: 0, y: 0 });

     const [authenticated, setAuthenticated] = useState(false);
     const [open, setOpen] = useState(false);

     const drawings = [1, 2, 3, 4, 5, 6, 7];

     const navigate = useNavigate();
     const dispatch = useDispatch();

     const loginRequest = useSelector((state) => state.auth.loginRequest);
     const loginError = useSelector((state) => state.auth.loginError);
     const loginErrorOccurred = useSelector(
          (state) => state.auth.loginErrorOccurred
     );

     const formik = useFormik({
          initialValues: {
               email: "",
               password: "",
          },
          validationSchema: Yup.object({
               email: Yup.string()
                    .email("* Invalid Email")
                    .required("* Email is required"),
               password: Yup.string()
                    .min(8, "* Invalid Password")
                    .required("* Password is required"),
          }),
          onSubmit: (values, { setSubmitting }) => {
               dispatch(authenticateUser(values));
               setTimeout(() => {
                    setSubmitting(false);
               }, 1000);
          },
     });

     useEffect(() => {
          if (isUserAuthenticated() === "true") {
               navigate("/");
          }
     });

     useEffect(() => {
          document.title = "Login | Facetcher";

          if (window.scrollY > 0) window.scrollTo(0, 0);
          const handleMouseMove = (event) => {
               if (window.scrollY < 500) {
                    setMousePos({ x: event.clientX, y: event.clientY });
                    setMousePosSecTwo({ x: 0, y: 0 });
               } else {
                    setMousePos({ x: 0, y: 0 });
                    setMousePosSecTwo({ x: event.clientX, y: event.clientY });
               }
          };

          window.addEventListener("mousemove", handleMouseMove);

          return () => {
               window.removeEventListener("mousemove", handleMouseMove);
          };
     }, []);

     return (
          <div className="w-100">
               <Header fixed />
               <div className="w-100 vh-100  d-flex justify-content-center align-items-center">
                    <div className="w-75 h-100 d-flex justify-content-center align-items-center">
                         <div className="position-relative w-100 h-100 d-flex justify-content-center align-items-center">
                              <div
                                   className=" bg-cyan rounded-circle position-absolute circle"
                                   style={{
                                        width: 150,
                                        height: 150,
                                        bottom: `${mousePos.y / 55 + 150}px`,
                                        left: `${mousePos.x / 55 + 200}px`,
                                   }}
                              ></div>
                              <div
                                   className="bg-dark-grey2 rounded-circle position-absolute circle"
                                   style={{
                                        width: 200,
                                        height: 200,
                                        top: `${mousePos.x / 55 + 60}px`,
                                        right: `${mousePos.y / 55 + 155}px`,
                                   }}
                              ></div>
                              <div className="d-flex justify-content-center align-items-center w-50 h-75 rounded-5 login-form">
                                   <form
                                        onSubmit={formik.handleSubmit}
                                        className="d-flex w-75 justify-content-center align-items-center flex-column"
                                   >
                                        <p className="fs-4 mb-5">
                                             Please Login with your generated
                                             account that you received
                                             {loginErrorOccurred && (
                                                  <span className="text-cyan mt-3">
                                                       * {loginError}
                                                  </span>
                                             )}
                                        </p>
                                        <input
                                             name="email"
                                             type="email"
                                             placeholder="Email"
                                             className=" rounded-pill bg-transparent form-control grey-border p-2 px-3 text-white my-3"
                                             onChange={formik.handleChange}
                                             value={formik.values.email}
                                             onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.email &&
                                             formik.touched.email && (
                                                  <p>{formik.errors.email}</p>
                                             )}
                                        <input
                                             name="password"
                                             type="password"
                                             placeholder="Password"
                                             className=" rounded-pill bg-transparent form-control grey-border p-2 px-3 text-white my-3"
                                             onChange={formik.handleChange}
                                             value={formik.values.password}
                                             onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.password &&
                                             formik.touched.password && (
                                                  <p>
                                                       {formik.errors.password}
                                                  </p>
                                             )}
                                        <button
                                             type="submit"
                                             disabled={formik.isSubmitting}
                                             className="btn d-flex justify-content-center align-items-center bg-cyan rounded-pill px-5 py-2 text-light-grey my-3 fw-bold"
                                        >
                                             {loginRequest
                                                  ? "Loading..."
                                                  : "Login"}
                                        </button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
export default Login;
