import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema({
  userId: { type: String, required: true },
  note: { type: String, required: true },
  read: { type: Boolean, default: false },
  date: { type: Date, default: Date.now() },
});

export const notificationModel = mongoose.model(
  "notification",
  notificationSchema
);
