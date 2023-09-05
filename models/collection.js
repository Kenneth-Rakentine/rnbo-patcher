const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  name: { type: String, required: true }, 
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  patches: [
    {
      title: { type: String, required: true }, 
      url: { type: String, required: true }, 
    },
  ],
});

module.exports = mongoose.model('Collection', collectionSchema);