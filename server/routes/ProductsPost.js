const express = require("express");
const router = express.Router();
const db = require("../db");
const JwtAuthMethPro = require("../AuthContext");

// querys
const addProductQuery = require("../productsEndPoint/addProduct/AddProductsQuerys");

router.post(
  "/products/AddProduct",
  JwtAuthMethPro.checkTokenExpire,
  async (req, res) => {
    const JwtTokenPayload = req.JwtTokenPayload;
    const userId = JwtTokenPayload.UserId;

    const product = req.body.product;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const priceSold = req.body.priceSold;
    const quantitySold = req.body.quantitySold;
    const user_id = userId;

    const checkIfProductExists = await addProductQuery.GetProductsQueryProduct(
      user_id,
      product,
      db
    );
    const checkIfProductExistsState = checkIfProductExists.length == 0;

    if (checkIfProductExistsState) {
      const AddProductsQuery = await addProductQuery.PostProductsQuery(
        {
          product,
          price,
          quantity,
          priceSold,
          quantitySold,
          user_id,
        },
        db
      );
    }

    const getProducts = await addProductQuery.GetProducts(user_id, db);

    res.send(getProducts);
  }
);

router.post(
  "/products/UpdateProduct",
  JwtAuthMethPro.checkTokenExpire,
  async (req, res) => {
    const JwtTokenPayload = req.JwtTokenPayload;
    const userId = JwtTokenPayload.UserId;

    const Productid = req.body.id;
    const product = req.body.product;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const priceSold = req.body.priceSold;
    const quantitySold = req.body.quantitySold;

    await addProductQuery.updateQueryProduct(
      {
        product,
        price,
        quantity,
        priceSold,
        quantitySold,
      },
      { userId, Productid },
      db
    );

    const getPro = await addProductQuery.GetProducts(userId, db);

    res.send(getPro);
  }
);

router.post(
  "/products/DeleteProduct",
  JwtAuthMethPro.checkTokenExpire,
  async (req, res) => {
    const JwtTokenPayload = req.JwtTokenPayload;
    const userId = JwtTokenPayload.UserId;

    const ProductId = req.body.productId;


    const sqlQuery = `DELETE FROM \`products\` WHERE user_id=${userId} AND id=${ProductId}`;
    db.query(sqlQuery, async (err, result) => {
      const getPro = await addProductQuery.GetProducts(userId, db);
      res.send(getPro);
    });
  }
);

module.exports = router;
