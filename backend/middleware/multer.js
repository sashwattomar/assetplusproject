//Multer to handle file uploads
const multer = require('multer');
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/public');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  },
});
const upload = multer({storage: fileStorageEngine});

module.exports = upload;
