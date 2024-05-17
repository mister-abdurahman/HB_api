import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  reason: { type: String, required: true },
  doctorId: { type: String, required: true },
  doctorName: { type: String, required: true },
  doctorNote: { type: String, default: "" },
  completed: { type: Boolean, default: false },
  vitals: {
    bloodPressure: { type: String },
    sugarLevel: { type: String },
    heartRate: { type: String },
  },
});

export const appointmentModel = mongoose.model(
  "appointment",
  appointmentSchema
);
