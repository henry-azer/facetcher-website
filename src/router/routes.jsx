import React from "react";
import { Routes, Route } from "react-router-dom";

import DrawingPage from "../views/DrawingPage";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Login from "../views/Login";
import History from "../views/History";
import Submission from "../views/Submission";

const routes = () => (
     <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/drawing-page" element={<DrawingPage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/submissions/:title" element={<Submission />} />

          {/* <Route element={<NotFound />} /> */}
     </Routes>
);

export default routes;
