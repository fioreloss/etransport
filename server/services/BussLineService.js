const mongoose = require("mongoose");
const bussLines = require("../models/bussLines");
const buss = require("../models/buss");
const databaseOperations = {
  findBussLineTimeStartTimeEndLineStartLineEnd: async (
    timeStart,
    timeEnd,
    lineStart,
    lineEnd
  ) => {
    const busLines = await bussLines
      .find({
        lineStart: lineStart,
        lineEnd: lineEnd,
        timeStart: timeStart,
        timeEnd: timeEnd,
      })
      .populate("buss");
    if (busLines.length == 0) {
      return false;
    } else {
      return busLines;
    }
  },

  addBussLine: (body) => {
    const userDataTable = new bussLines(body).save().catch((n) => false);
    return userDataTable;
  },
  getBusLine: () => {
    const userDataTable = bussLines.find();
    if (userDataTable == 0) {
      return false;
    } else {
      return userDataTable;
    }
  },
  getBussLineById: async (busLineId) => {
    return await bussLines.findById(busLineId);
  },
  getBussByBussLineId: async (busLineId) => {
    return await buss.find({ bussLinesId: busLineId });
  },
};

const addBussLineService = async (reqBody) => {
  const { lineStart, lineEnd, timeStart, timeEnd } = reqBody;
  const findLine =
    await databaseOperations.findBussLineTimeStartTimeEndLineStartLineEnd(
      timeStart,
      timeEnd,
      lineStart,
      lineEnd
    );
  if (!findLine) {
    return await databaseOperations.addBussLine(reqBody);
  }
  return false;
};

const getBussLine = async () => {
  return await databaseOperations.getBusLine();
};
const getBussLineWithBussesService = async (bussId) => {
  const buslineById = await databaseOperations.getBussLineById(bussId);
  const busses = await databaseOperations.getBussByBussLineId(bussId);
  const bussLineAndBusses = { buslineById, busses: busses };
  return bussLineAndBusses;
};

module.exports = {
  addBussLineService,
  getBussLine,
  getBussLineWithBussesService,
};
