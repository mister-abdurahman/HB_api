import app from "./app.js";
import env from "./util/validateEnv.js";
import mongoose from "mongoose";

const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose Connected");
    app.listen(port, () => {
      console.log("Server Running on Port: " + port);
    });
  })
  .catch(console.error);

// fix error handling
