// //Importing the module
const express = require("express");
const uploadMulterMiddleware = require("../middleware/MulterMiddleware");
const UploadModel = require("../models/UploadModel");
const fs = require("node:fs");

// Creating express Router
const router = express.Router();

const readFiles = (dirname) => {
  let data = [];
  const files = fs.readdirSync(dirname);
  files.forEach((fileName) => {
    const file = fs.readFileSync(dirname + fileName, "utf-8");
    data = [...data, { filename: fileName, contents: file }];
  });

  return data;
};

router.get("/getAll", (req, res) => {
  const allPhotos = readFiles("./public/uploads/");
  console.log("--- getAllPhot backend : ", allPhotos);
  res.send(JSON.stringify(allPhotos));
});

router.post(
  "/save",
  uploadMulterMiddleware.single("photo"),
  function (req, res) {
    if (req) {
      const photo = req.file.filename;
      UploadModel.create({ photo })
        .then((data) => {
          console.log("Upload successfully..");
          console.log(data);
          res.send(data);
        })
        .catch((err) => console.log("Error : ", err));
    }
  }
);

module.exports = router;
