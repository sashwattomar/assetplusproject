const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: {type: String, required: true},
  img: {type: String, required: true},
});
// CREATING USER MODEL FOR REGISTER.JS
const Gallery = mongoose.model('gallery', GallerySchema); //user is termed as model name and UserSchema is schema name
module.exports = Gallery;
