import { TextField, Typography, Stack } from "@mui/material"; //using material UI for inputs and text

import { useState } from "react";
export const App = () => {
  const [state, setstate] = useState(""); //this state is used to control input field
  const [result, setresult] = useState(""); // this usestate is used for output
  let first,
    second,
    third = 0; // created 3 variables to calculate 3 variables
  const handelchange = (e) => {
    e.preventDefault(); //using this function to stop the default behvaiour
    let value = e.target.value; //getting the value of textfield

    setstate(value); //setting the state of input

    let original_number = Number(value); //converting the type to number because input data is string by default

    if (original_number > 0 && original_number % 2 === 0) {
      //this case handels even numbers
      first = original_number + 2;
      second = original_number + 4;
      third = original_number + 6;
      let result = first + "," + second + "," + third;

      setresult(result);
    } else if (original_number > 0 && original_number % 2 === 1) {
      //this case handels odd numbers
      first = original_number + 2;
      second = original_number + 4;
      third = original_number + 6;

      let result = first + "," + second + "," + third;

      setresult(result);
    } else if (original_number < 0) {
      setresult("enter a positive value"); //this case handels when user types negative numbers
    } else {
      setresult(" Please write some integers"); //added  extra case to handle some cases like '1-1' or  when user type then uses backspaces
    }
  };

  return (
    <Stack>
      <Typography margin={"auto"} marginBottom="30px" variant="h4">
        Inkoop Assingment
      </Typography>
      <TextField
        value={state}
        onChange={handelchange}
        placeholder="write some integers "
        type="number"
      ></TextField>
      <Typography margin="auto" marginTop={"10px"}>
        {result}
      </Typography>
    </Stack>
  );
};
