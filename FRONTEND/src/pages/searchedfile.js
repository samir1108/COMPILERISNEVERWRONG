import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import axios from "axios";
import Card from "../components/Card";

const Searchedfile = () => {
  const { id } = useParams(); // now when user types something to search ,first thing is front part is get changed ,how?
  //on server side we define route ,and then on server side react renders the changed component, then it fetches data to do that it will have a server that will be take a request and in between it will do all that processing and then it will send a response now when thos information will be sent to front end part then it will render ,
  useEffect(async () => {
    //oon here , i want data so for that, for data server
    //axios.get(url,options is passed) when url will be template string
    axios
      .get(`http://localhost:8001/search/${id}`)
      .then((data) => setdata(data))
      .catch(() => console.log("helo"));
  }, [id]);
  const [data, setdata] = useState(null);
  return (
    <Stack flexWrap={"wrap"} direction="row">
      {data?.map((data) => (
        <Card data={data} />
      ))}
    </Stack>
  );
};

export default Searchedfile;
