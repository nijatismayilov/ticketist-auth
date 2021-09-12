import mongoose from "mongoose";

import { app } from "./app";

const startService = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT Secret does not exist");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
  } catch (_error) {}

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

startService();
