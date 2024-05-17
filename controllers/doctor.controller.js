import { doctorModel } from "../models/doctor.model.js";
import { appointmentModel } from "../models/appointment.model.js";

export const createDoctor = async (req, res) => {
  const doctor = new doctorModel(req.body);

  try {
    doctor.save();
    res.status(200).json({ message: "Doctor created successfully" });
  } catch (error) {
    res.status(400).json({
      data: null,
      hasError: true,
      message:
        error._message || "An error occured while adding favourite rental",
    });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find();

    res
      .status(200)
      .json({ data: doctors, message: "Doctors retrieved successfully" });
  } catch (error) {
    res.status(400).json({
      data: null,
      hasError: true,
      message: error._message || "An error occured while getting doctors",
    });
  }
};
