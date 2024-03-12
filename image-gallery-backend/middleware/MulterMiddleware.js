const multer = require("multer");
// const { v4: uuidv4 } = require("uuid");
const uuid = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/uploads");
  },
  filename: function (req, file, callback) {
    callback(null, `${uuid.v4()}_${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, callback) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const uploadMulterMiddleware = multer({ storage, fileFilter });

module.exports = uploadMulterMiddleware;
