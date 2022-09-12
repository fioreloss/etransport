const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productsSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    // required: true,
  },
  name: String,
  lastname: String,
  password: String,
});
const products = mongoose.model("products", productsSchema);
module.exports = products;
