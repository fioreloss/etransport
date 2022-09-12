const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bussSchema = new mongoose.Schema({
  seats: String,
  bussLinesId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "bussLines",
    // required: true,
  },
});
const buss = mongoose.model("buss", bussSchema);
module.exports = buss;
