const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "C:\Users\nicol\OneDrive\Escritorio\bri\grupo_3_ticketPro\dashboard\public\images");
  },
  filename: (req, file, cb) => {
    return cb(
      null,
      `${Date.now()}_products_${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage,
});

module.exports = upload;