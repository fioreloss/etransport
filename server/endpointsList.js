// app.post("/test/hi", (req, res) => {
//   //   const user2 = req.body.user2;
//   //   const pas2 = req.body.pas2;

//   res.send("hi");

//   //   const sqlQuery =
//   //     "SELECT * FROM `account` WHERE `username`=? AND `pasword`=?;";
//   //   db.query(sqlQuery, [user2, pas2], (err, result) => {
//   //     console.log(result);

//   //     if (result.length > 0) {
//   //       console.log("loged in");
//   //       console.log(result[0].numbers);
//   //       res.send({ datax: result, auth: 1, number2: result[0].acount_type });
//   //     } else {
//   //       console.log("error not loged in");
//   //       res.send({ datax: result, auth: 0 });
//   //       // res.send('eror loging in');
//   //     }
//   //   });
// });

// app.get("/test/hp", (req, res) => {
//   const sqlQuery = "SELECT * FROM `products` WHERE 1";
//   db.query(sqlQuery, (err, result) => {
//     console.log(result);
//     res.send(result);
//   });

//   // res.send("hi");
// });

// app.get("/test/hp/async", async (req, res) => {
//   const sqlQuery = "SELECT * FROM `products` WHERE 1";

//   const GetSqlQuery = async () => {
//     return new Promise((res, err) => {
//       db.query(sqlQuery, (err, result) => {
//         return res(result);
//       });
//     });
//   };

//   hi = await GetSqlQuery();
//   console.log(hi);
//   res.send(hi);
// });













// app.get("/products/get/:id", (req, res) => {
//   const sqlQuery = `SELECT * FROM \`products\` WHERE user_id=${req.params.id}`;
//   db.query(sqlQuery, (err, result) => {
//     res.send(result);
//   });
// });