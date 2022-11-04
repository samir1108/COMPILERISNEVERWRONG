import React from "react";
import { Stack } from "@mui/material"; //here ,compiler should understand and atleast ask here before giving error
import { Typography } from "@mui/material";
import { problemsolvingData } from "../assets";
import MainCard from "../MainCard";

const ProblemSolving = () => {
  return (
    <Stack alignItems={"center"} gap={3}>
      <Typography>hello</Typography>
      {problemsolvingData.map((data_) => {
        return <MainCard data={data_} key={data_.id} />;
      })}
    </Stack>
  );
};

export default ProblemSolving;
