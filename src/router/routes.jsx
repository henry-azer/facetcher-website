import React from "react";
import { Routes, Route } from "react-router-dom";

import DrawingPage from "../views/DrawingPage";
import Home from "../views/Home";

const routes = () => (
     <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/drawing-page" element={<DrawingPage />} />
          {/* <Route element={<NotFound />} /> */}
     </Routes>
);

export default routes;
