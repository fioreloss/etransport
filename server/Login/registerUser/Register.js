

const GetSqlQuery = async (username,db) => {
    const sqlQuery = `SELECT \`name\` FROM \`user\` WHERE name="${username}"`;
    return new Promise((res, err) => {
      db.query(sqlQuery, (err, result) => {
        return res(result);
      });
    });
  };

  const updateSqlInsert = async (username, hashedPassword,db) => {
    const sqlQuery = `INSERT INTO \`user\`( \`name\`, \`pasword\`) VALUES ('${username}','${hashedPassword}')`;
    return new Promise((res, err) => {
      db.query(sqlQuery, (err, result) => {
        if (result) {
          return res(result);
        } else {
          return err;
        }
      });
    });
  };

  const checkUserExists = (QueryName, name) => {
    if (name == QueryName) {
      return true;
    } else {
      return false;
    }
  };

  module.exports={
    GetSqlQuery,
    updateSqlInsert,
    checkUserExists
}