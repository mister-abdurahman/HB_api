import { newsModel } from "../models/news.model.js";

export const checkId = async (req, res, next) => {
  if (req.params.id == "undefined" || req.params.id == "null") {
    return res.status(400).json({
      message: "Id is missing!",
    });
  }
  const check = newsModel.findById(req.params.id);
  if (!check) {
    return res.status(400).json({
      message: "Incorrect Id !",
    });
  }
  next();
};

export const getAllNews = async (req, res) => {
  const news = await newsModel.find();
  try {
    res.status(200).json({
      data: news,
      message: "Fetched all News successfully",
    });
  } catch (error) {
    res.status(400).json({
      data: null,
      hasError: true,
      message: error.message || "An error occured while fetching News",
    });
  }
};

export const getNewsById = async (req, res) => {
  const news = await newsModel.findById(req.params.id);
  try {
    res.status(200).json({
      data: news,
      message: "Fetched News successfully",
    });
  } catch (error) {
    res.status(400).json({
      data: null,
      hasError: true,
      message: error.message || "An error occured while fetching News",
    });
  }
};
export const createNews = async (req, res) => {
  const news = new newsModel(req.body);
  try {
    news.save();
    res.status(200).json({ message: "news created successfully" });
  } catch (error) {
    res.status(400).json({
      data: null,
      hasError: true,
      message: error.message || "An error occured while creating News",
    });
  }
};
