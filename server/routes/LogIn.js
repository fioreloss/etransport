



const express = require("express");
const router=express.Router()
const db = require("../db");


const passHasherPro = require("../Login/PaswordHasher/PassHashPro");
const {
  GetSqlQuery,
  checkUserExists,
  updateSqlInsert,
} = require("../Login/registerUser/Register");
const GetSqlQueryLogIn = require("../Login/LogInUser/LogInUser");
const JwtAuthMethPro=require("../AuthContext")

// midle ware




router.post("/register", async (req, res) => {
  const usernameBody = req.body.usernameBody;
  const passBody = req.body.passBody;

  //   get username sql
  QueryUser = await GetSqlQuery(usernameBody, db);
  const QueryUserName = QueryUser[0]?.name;

  //   check username sql with username body
  if (!checkUserExists(QueryUserName, usernameBody)) {
    //   encript pass and insert user
    const hashPass = await passHasherPro.hashPasword(passBody);
    await updateSqlInsert(usernameBody, hashPass, db);
    res.send({register:"user register",reg:true});
  } else {
    //   dont insert user error
    res.send({register:"user exists",reg:false});
  }
});

router.post("/LogIn", async (req, res) => {
  const usernameBody = req.body.usernameBody;
  const passBody = req.body.passBody;

  const usernameAndPass = await GetSqlQueryLogIn(usernameBody, db);

  if (usernameAndPass.length != 0) {
    const passwordChecker = await passHasherPro.passwordCompare(
      passBody,
      usernameAndPass[0].pasword
    );
    if (passwordChecker) {
      const payload = {
        UserId: usernameAndPass[0].id,
        UserName: usernameAndPass[0].name,
      };
      const token = await JwtAuthMethPro.createAuthTokenWithExpire(payload,"30m");
      res.send({ token: token });
    } else {
      res.send({error:"incorect password"});
    }
  } else {
    res.send({error:"user not exist"});
  }
});
// TODO:
router.get("/hip", (req, res) => {
  res.send("hi");
});
// FIXME:
router.post("/Protected", JwtAuthMethPro.checkTokenExpire, async (req, res) => {
  const jwtPayloadPro=req.JwtTokenPayload
  res.send(jwtPayloadPro);
});



module.exports=router