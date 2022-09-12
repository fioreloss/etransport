const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bussLinesSchema = new mongoose.Schema({
  lineStart: String,
  lineEnd: String,
  timeStart: Number,
  timeEnd: Number,
  //   busses: {
  //     type: mongoose.SchemaTypes.ObjectId,
  //     ref: "user",
  //     // required: true,
  //   },
});
const bussLines = mongoose.model("bussLines", bussLinesSchema);
module.exports = bussLines;
