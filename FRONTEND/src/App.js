import React from "react";
import { Stack, Typography } from "@mui/material";
import { data } from "./assets";
import MainCard from "./MainCard";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ProblemSolving from "./pages/ProblemSolving";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import Post from "./pages/Post";
import Searchedfile from "./pages/searchedfile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem-solving" element={<ProblemSolving />} />
        <Route path="/web-dev" element={<ProblemSolving />} />
        <Route path="/definitions" element={<ProblemSolving />} />
        <Route path="/data-post" element={<Post />} />
        <Route path="/search/:id" element={<Searchedfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
