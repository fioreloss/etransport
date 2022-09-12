const jwt = require("jsonwebtoken");

class AuthenticatonMethods {
  constructor(keysecret) {
    this.keysecret = keysecret;
  }
  getkeysecret = () => {
    return this.keysecret;
  };

  createAuthToken = (payload) => {
    return new Promise((res, err) => {
      jwt.sign(payload, this.keysecret, function (err, token) {
        res(token);
      });
    });
  };

  checkToken = (req, res, next) => {
    const bearertoken = req.headers["authorization"];
    if (bearertoken) {
      const jwtBarerArray = bearertoken.split(" ");
      const jwtBarer = jwtBarerArray[1];

      jwt.verify(jwtBarer, this.keysecret, function (err, decoded) {
        if (decoded) {
          req.JwtTokenPayload = decoded;
          next();
        } else {
          res.send("access denied");
        }
      });
    } else {
      res.send("no access");
    }
  };






  createAuthTokenWithExpire = (payload,experation) => {
    return new Promise((res, err) => {
      jwt.sign(payload, this.keysecret,{expiresIn: experation}, function (err, token) {
        res(token);
      });
    });
  };

  checkTokenExpire = (req, res, next) => {
    const bearertoken = req.headers["authorization"];
    if (bearertoken) {
      const jwtBarerArray = bearertoken.split(" ");
      const jwtBarer = jwtBarerArray[1];

      jwt.verify(jwtBarer, this.keysecret, function (err, decoded) {
        if (decoded) {
          req.JwtTokenPayload = decoded;
          next();
        } else {
          res.status(403)
          res.send({error:"access denied"});
        }
      });
    } else {
      res.status(403)
      res.send({error:"no access"});
    }
  };
}

module.exports = AuthenticatonMethods;
