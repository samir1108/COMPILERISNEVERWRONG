const mongoose = require("mongoose");

const ObjectSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  subtopic: {
    type: String,
    required: false,
  },

  code: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Object", ObjectSchema);
