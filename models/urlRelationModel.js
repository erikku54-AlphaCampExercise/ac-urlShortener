
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const urlRelationSchema = new Schema({
  originalURL: {
    type: String,
    required: true
  },
  shortenedURL: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('UrlRelation', urlRelationSchema);
