



  const PostProductsQuery = async (insert,db) => {
    const sqlQuery = `INSERT INTO \`products\`
    (\`product\`, \`price\`, \`quantity\`, \`priceSold\`, \`quantitySold\`, \`user_id\`)
     VALUES 
     ('${insert.product}','${insert.price}','${insert.quantity}','${insert.priceSold}','${insert.quantitySold}','${insert.user_id}')`;
    return new Promise((res, err) => {
      db.query(sqlQuery, (err, result) => {
        return res(result);
      });
    });
  };

  const GetProducts = async (userId,db) => {
    const sqlQuery = `SELECT * FROM \`products\` WHERE user_id=${userId}`;
    return new Promise((res, err) => {
      db.query(sqlQuery, (err, result) => {
        return res(result);
      });
    });
  };


  const GetProductsQueryProduct = async (userId,product,db) => {
    const sqlQuery = `SELECT * FROM \`products\` WHERE user_id=${userId} AND product="${product}"`;
    return new Promise((res, err) => {
      db.query(sqlQuery, (err, result) => {
        return res(result);
      });
    });
  };


  // check TODO:
  const updateQueryProduct = async (data,idData,db) => {

    const sqlQuery = `UPDATE \`products\` SET 
    
    
    ${data.product?` product='${data.product}', `:" "}
    ${data.price?` price=${data.price}, `:""}
    ${data.quantity?` quantity=${data.quantity}, `:" "}
    ${data.priceSold?` priceSold=${data.priceSold}, `:" "}
    ${data.quantitySold?` quantitySold=${data.quantitySold}, `:" "}
    
    
    WHERE user_id=${idData.userId} AND id=${idData.Productid} `;
    const sqlQuerypro = sqlQuery.replace(/,(?=[^,]*$)/, '')
    return new Promise((res, err) => {
      db.query(sqlQuerypro, (err, result) => {
        return res(result);
      });
    });
  };



  module.exports={
    PostProductsQuery,
    GetProducts,
    GetProductsQueryProduct,
    updateQueryProduct
  }