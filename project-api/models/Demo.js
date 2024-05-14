require("../config/db");
const mongoose = require("mongoose");

const DemoSchema = mongoose.Schema({
    name: String,
  dob: String,
  
})

const Demo = mongoose.model("demo", DemoSchema)

module.exports = Demo;