


  const GetSqlQueryLogIn = async (username,db) => {
    const sqlQuery = `SELECT * FROM \`user\` WHERE name="${username}"`;
    return new Promise((res, err) => {
      db.query(sqlQuery, (err, result) => {
        return res(result);
      });
    });
  };



  module.exports = GetSqlQueryLogIn;