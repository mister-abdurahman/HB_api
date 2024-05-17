import jwt from "jsonwebtoken";
import env from "../util/validateEnv.js";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      // return res.status(403).send("Access Denied");
      return res
        .status(403)
        .json({ message: "You are not authorized to access this resource" });
    }

    if (token.startsWith("Bearer ")) {
      //   token = token.slice(7, token.length).trimLeft();
      token = token.slice(7, token.length).trimStart();
    }

    const verified = jwt.verify(token, env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
