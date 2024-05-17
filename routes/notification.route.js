import express from "express";
import {
  checkId,
  checkUserId,
  createNotification,
  getNotificationsByUserId,
  updateNotification,
} from "../controllers/notification.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const notificationRouter = express.Router();

notificationRouter
  .route("/:userId")
  .get(verifyToken, checkUserId, getNotificationsByUserId);
notificationRouter.route("/create").post(verifyToken, createNotification);
notificationRouter
  .route("/edit/:id")
  .patch(verifyToken, checkId, updateNotification);

export default notificationRouter;
