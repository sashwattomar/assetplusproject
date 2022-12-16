const express = require('express');
const router = express.Router();
const GalleryModel = require('../../models/Gallery');
const upload = require('../../middleware/multer');

router.post('/', upload.single('put'), async (req, res) => {
  const {title} = req.body;
  const img = req.file.filename;
  try {
    user = new GalleryModel({
      title,
    
      img,
    });
    await user.save();
    res.status(200).send('fileuploaded');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

router.get('/', async (req, res) => {
  try {
    const uploads = await GalleryModel.find().populate('title', 'image');
    res.json(uploads);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
