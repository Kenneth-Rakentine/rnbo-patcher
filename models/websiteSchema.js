const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // user: { type: Object, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  collectionId: { type: Schema.Types.ObjectId, ref: 'Collection' },
}, {
  timestamps: true
});

module.exports = mongoose.model('Website', websiteSchema);