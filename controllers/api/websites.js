// const mongoose = require('mongoose');
// const Website = mongoose.model('Website');

// async function saveWebsite(req, res) {
//   const { userId } = req.user; 
//   const { url } = req.body;

//   try {
//     const website = new Website({ userId, url });
//     await website.save();
//     res.json({ success: true, message: 'Website state saved successfully' });
//   } catch (error) {
//     console.error('Error saving website state:', error);
//     res.status(500).json({ success: false, message: 'Error saving website state' });
//   }
// }

// module.exports = {
//   saveWebsite,
// };