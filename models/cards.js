var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CardSchema = new Schema(
  {
    img:
    {
      data: Buffer,
      contentType: String
    },
    title: {type: String, required: true},
    summary: {type: String, required: true},
  }
);

module.exports = new mongoose.model('cards', CardSchema);