import express from "express";
import {
  checkId,
  checkWalletId,
  createTransaction,
  getAllTransactions,
  getTransactionById,
  getTransactionsByWalletId,
} from "../controllers/transaction.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const transactionRouter = express.Router();

transactionRouter.route("/").get(verifyToken, getAllTransactions);
transactionRouter.route("/:id").get(verifyToken, checkId, getTransactionById);
transactionRouter
  .route("/wallet/:id")
  .get(verifyToken, checkWalletId, getTransactionsByWalletId);
transactionRouter.route("/create").post(verifyToken, createTransaction);

export default transactionRouter;
