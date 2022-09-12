const mongoose = require("mongoose");
const buss = require("../models/buss");

const databaseOperations = {
  addBus: async (body) => {
    const addBusOperation = new buss(body).save().catch((n) => false);
    return addBusOperation;
  },
};

const addBussService = async (reqBody) => {
  if (!reqBody.bussLinesId) {
    return false;
  }
  return databaseOperations.addBus(reqBody);
};

module.exports = { addBussService };
