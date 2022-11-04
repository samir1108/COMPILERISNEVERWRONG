import React, { useState } from "react";
import { Stack, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const handelEvent = (e) => {
    e.preventDefault();
    console.log("hello");
    navigate("/data-post");
  };
  const handel = (e) => {
    e.preventDefault();

    console.log("hello");
    navigate(`/search/${searchterm}`);
    setsearchterm("");
  };
  const [searchterm, setsearchterm] = useState("");
  return (
    <Stack alignItems={"center"} marginTop="30px" fontWeight={"100"}>
      <Typography
        style={{ cursor: "pointer" }}
        onClick={handelEvent}
        variant="h1"
      >
        ... is never wrong
      </Typography>
      <Paper
        className="search-input"
        sx={{ height: "40px" }}
        component="form"
        onSubmit={handel}
      >
        <input
          className="search-input"
          value={searchterm}
          onChange={(e) => setsearchterm(e.target.value)}
        />
      </Paper>
    </Stack>
  );
};

export default Navbar;
