const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("helo");
  } catch (err) {
    console.log("d");
  }
};
module.exports = connectDB;
