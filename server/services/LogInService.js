const user = require("../models/users");
const mongoose = require("mongoose");
const {
  hashPasword,
  passwordCompare,
} = require("../Login/PaswordHasher/PassHashPro");
const JwtAuthMethPro = require("../Login/Auth/AuthContext");

const findUserByEmail = async (email) => {
  const userAuth = await user.find({ email: email });
  if (userAuth.length > 0) {
    return userAuth;
  } else {
    return false;
  }
};

const putUser = async (body) => {
  const userData = new user(body);
  let isEror = false;
  const userDataTable = userData.save().catch((n) => false);
  return userDataTable;
};

const signUpService = async (reqBody) => {
  const bodyChange = {
    ...reqBody,
    password: await hashPasword(reqBody.password),
  };

  return await putUser(bodyChange);
};

const logInService = async (email, password) => {
  const userAuth = await findUserByEmail(email);
  if (!userAuth) {
    return { error: "username or password wrong" };
  }
  const checkPasword = await passwordCompare(password, userAuth[0].password);
  if (checkPasword) {
    const token = await JwtAuthMethPro.createAuthTokenWithExpire(
      {
        payLoad: userAuth[0],
      },
      20
    );

    return { token: token };
  } else {
    return { error: "username or password wrong" };
  }
};
module.exports = {
  signUpService,
  logInService,
};
