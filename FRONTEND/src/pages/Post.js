import React, { useState } from "react";
import { TextField, Stack, Button } from "@mui/material";
import { data } from "../assets";

import axios from "axios";
const Post = () => {
  const handelsubmit = async (e) => {
    e.preventDefault(); //prevent the default behaviour of a an event where it refresh data
    //now here i have feined a function handelsubmit which is defined as asyncronous becoz our code will break becoz
    const postData = {
      topic: topic,
      code: code,
    };

    const x = axios.post("http://localhost:8001/data-post", postData);
    setcode("");
    settopic("");
  };
  const [code, setcode] = useState("");
  const [topic, settopic] = useState("");
  return (
    <Stack>
      <TextField
        value={code}
        onChange={(e) => setcode(e.target.value)}
        multiline
        rows={20}
      />
      <TextField
        label="enter your topic"
        value={topic}
        onChange={(e) => settopic(e.target.value)}
      />
      <Button onClick={handelsubmit}>SUBMIT</Button>
    </Stack>
  );
};

export default Post;
