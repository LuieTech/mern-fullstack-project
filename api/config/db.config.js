const mongoose = require("mongoose");

const mongodbUri = process.env.MONGODB_URI || "mongodb://localhost/training-backend";

mongoose.connect(mongodbUri)
  .then(() => console.info(`Successfully connected to ${mongodbUri}`))
  .catch(error => console.error(`Error trying to connect to ${mongodbUri}`))