import mongoose, { Schema } from "mongoose";

const walletSchema = new Schema({
  // userId: { type: String, required: true },
  currentBalance: { type: Number, required: false, default: 0 },
});

export const walletModel = mongoose.model("wallet", walletSchema);
