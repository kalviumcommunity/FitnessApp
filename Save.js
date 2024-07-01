const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaveSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  dateSaved: {
    type: Date,
    default: Date.now,
  },
});

const Save = mongoose.model('Save', SaveSchema);

module.exports = Save;