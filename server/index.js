const express = require("express");
const cors = require("cors");
const BodyParse = require("body-parser");


// configs
const db = require("./db");



// midleware
const app = express();
app.use(cors());
// app.use(BodyParse.urlencoded());
app.use(BodyParse.urlencoded({ extended: true }));
app.use(BodyParse.json());

// routs
const LoginAndAuth=require("./routes/LogIn")
const Products=require("./routes/Products")
const ProductsPost=require("./routes/ProductsPost")

// librarys






// routs
app.use("/",LoginAndAuth)
app.use("/",Products)
app.use("/",ProductsPost)



app.listen(3002, () => {
  console.log("port 3002");
});
