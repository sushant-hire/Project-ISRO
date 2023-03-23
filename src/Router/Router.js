import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Data from "../Pages/Data/Data";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data/:id" element={<Data />} />
    </Routes>
  );
}

export default Router;
