const express = require("express");
const mongoose = require("mongoose");
const UploadRoute = require("./routes/UploadRoute");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 5001;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api", UploadRoute);

connectToMongo();

app.listen(PORT, () => {
  console.log(`Server is start at port : ${PORT}`);
});
