const express = require("express");
const connectDB = require("./config/db");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
const Object = require("./schema");
connectDB();
app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(bodyParser());
app.use(bodyParser.json());

app.post("/data-post", (req, res) => {
  Object.create(req.body)
    .then(() => console.log("submit"))
    .catch(() => console.log("no"));
});
app.get("/", (req, res) => {
  Object.find()
    .then((objects) => console.log(objects))
    .catch(() => console.log("edjk"));
});
app.get("/search", (req, res) => {
  Object.find()
    .then((objects) => res.json(objects))
    .catch(() => res.status(400));
});

app.get("/search/:id", (req, res) => {
  Object.find({ topic: `${req.params.id}` } || { subtopic: `${req.params.id}` })
    .then((objects) => res.json(objects))
    .catch(() => console.log(req.params.id));
});
app.listen(8001, () => {
  console.log("i am connected samir");
});
