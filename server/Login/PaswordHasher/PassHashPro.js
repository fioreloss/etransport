
const Bcript=require("bcrypt")

const hashPasword = async (pass) => {
  const HashRounds = 10;
  const password = pass;

  const hashPassword = await Bcript.hash(password, HashRounds);

  return hashPassword;
};

const passwordCompare = async (pass, hash) => {
  const password = pass;
  const hashPass = hash;

  const match = await Bcript.compare(password, hashPass);
  return match;
};




module.exports={
    hashPasword,
    passwordCompare
}