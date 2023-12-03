import handleTransactionService from "../../services/transactionService";

const createTransaction = async (req, res) => {
  try {
    let data = await handleTransactionService.createTransaction(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      EM: "error with form data",
      EC: -1,
      DT: [],
    });
  }
};

const getAllByUserTransaction = async (req, res) => {
  try {
    let email = req.user.email;
    let data = await handleTransactionService.getTransactionByUser(email);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      EM: "error with form data",
      EC: -1,
      DT: [],
    });
  }
};

const getAllTransaction = async (req, res) => {
  try {
    let data = await handleTransactionService.getTransactionBy();
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      EM: "error with form data",
      EC: -1,
      DT: [],
    });
  }
};
module.exports = { createTransaction, getAllByUserTransaction, getAllTransaction };
