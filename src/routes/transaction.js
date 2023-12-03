import express from "express";
import transactionController from "../controller/Transaction/transaction";
import { checkUserJWT } from "../middleware/JWTAction";

const router = express.Router();

router.get("/read", checkUserJWT, transactionController.getAllByUserTransaction);
router.get("/read-all", transactionController.getAllTransaction);
router.post("/create", transactionController.createTransaction);
// router.put("/update", transactionController.updateTransaction);
// router.delete("/delete", transactionController.deleteTransaction);

export default router;
