import Transaction from "../model/Transaction";

const createTransaction = async (dataTransaction) => {
  try {
    let data = await Transaction.create(dataTransaction);
    if (!data) {
      return {
        EM: "Create data not found",
        EC: -3,
        DT: [],
      };
    }
    return {
      EM: "Ok!",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error something went wrong service",
      EC: -2,
    };
  }
};

const getTransactionByUser = async (email) => {
  try {
    let data = await Transaction.find({ "user.email": email }).populate("hotel").lean();
    if (!data) {
      return {
        EM: "Get data transaction not found",
        EC: -3,
        DT: [],
      };
    }
    return {
      EM: "Ok!",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error something went wrong service",
      EC: -2,
    };
  }
};

const getTransactionBy = async () => {
  try {
    let data = await Transaction.find({}).populate("hotel").lean();
    if (!data) {
      return {
        EM: "Get data transaction not found",
        EC: -3,
        DT: [],
      };
    }
    return {
      EM: "Ok!",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "error something went wrong service",
      EC: -2,
    };
  }
};
module.exports = { createTransaction, getTransactionByUser, getTransactionBy };
