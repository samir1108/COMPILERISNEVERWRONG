import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./App.css";
const MainCard = ({ data }) => {
  const { name } = data;

  return (
    <Link to={`/${name}`}>
      <Card className="MainCard" sx={{ padding: "20px", width: "200px" }}>
        <CardContent>
          <Typography className="MainCard">{name}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MainCard;
