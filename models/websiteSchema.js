const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // user: { type: Object, required: true },
  url: { type: String, required: true },
  //additional fields?
}, {
  timestamps: true
});

module.exports = mongoose.model('Website', websiteSchema);