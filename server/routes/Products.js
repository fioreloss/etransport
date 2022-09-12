const express = require("express");
const router = express.Router();
const db = require("../db");

// TODO:
// librarys
const procesDataProducts = require("../productsEndPoint/ProductProcesor");
const JwtAuthMethPro = require("../AuthContext");

// app.get("/products/get/:id", (req, res) => {
//   const sqlQuery = `SELECT * FROM \`products\` WHERE user_id=${req.params.id}`;
//   db.query(sqlQuery, (err, result) => {
//     res.send(result);
//   });
// });

router.get(
  "/products/get/procese",
  JwtAuthMethPro.checkTokenExpire,
  (req, res) => {
    const JwtTokenPayload = req.JwtTokenPayload;
    const userId = JwtTokenPayload.UserId;

    const sqlQuery = `SELECT * FROM \`products\` WHERE user_id=${userId}`;
    db.query(sqlQuery, (err, result) => {
      const CalculateIncome = procesDataProducts.CalculateIncome(result);
      res.send(CalculateIncome);
    });
  }
);

router.get(
  "/products/get/proceseProduct",
  JwtAuthMethPro.checkTokenExpire,
  (req, res) => {
    const JwtTokenPayload = req.JwtTokenPayload;
    const userId = JwtTokenPayload.UserId;

    const sqlQuery = `SELECT * FROM \`products\` WHERE user_id=${userId}`;
    db.query(sqlQuery, (err, result) => {
      const CalculateIncome =
        procesDataProducts.countProductsInomeAndAmount(result);

      res.send(CalculateIncome);
    });
  }
);

module.exports = router;
