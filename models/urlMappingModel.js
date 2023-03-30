
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const urlMappingSchema = new Schema({
  originalURL: {
    type: String,
    required: true
  },
  shortCode: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('urlMapping', urlMappingSchema);
