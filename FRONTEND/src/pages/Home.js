import React from "react";
import { Stack } from "@mui/material";
import MainCard from "../MainCard";
import { data } from "../assets";

export const Home = () => {
  return (
    <Stack marginTop={"20px"} alignItems={"center"} gap={4}>
      {data.map((data_) => {
        return <MainCard data={data_} key={data_.id} />;
      })}
    </Stack>
  );
};
