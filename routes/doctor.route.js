import express from "express";
import {
  createDoctor,
  getAllDoctors,
} from "../controllers/doctor.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const doctorRouter = express.Router();

doctorRouter.route("/").get(verifyToken, getAllDoctors);
doctorRouter.route("/create").post(verifyToken, createDoctor);

export default doctorRouter;
