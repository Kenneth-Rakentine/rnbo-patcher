const express = require('express');
const router = express.Router();
const Website = require('../../models/websiteSchema');

// Retrieve patches by user ID
router.get('/:userId/websites', async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch patches for the specified user
    const patches = await Website.find({ userId });

    res.status(200).json(patches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error retrieving patches' });
  }
});

// Create a new patch (website)
router.post('/', async (req, res) => {
  try {
    const { userId, url, title } = req.body;

    // Create a new website document
    const website = new Website({
      userId,
      url,
      title,
    });

    // Save website document to the database
    const savedWebsite = await website.save();

    res.status(201).json(savedWebsite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating website' });
  }
});

// Update patch title
router.put('/:websiteId', async (req, res) => {
  try {
    const websiteId = req.params.websiteId;
    const { title } = req.body;

    // Update patch title
    const updatedWebsite = await Website.findByIdAndUpdate(
      websiteId,
      { title },
      { new: true }
    );

    res.status(200).json(updatedWebsite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating website' });
  }
});

// Delete patch
router.delete('/:websiteId', async (req, res) => {
  try {
    const websiteId = req.params.websiteId;

    // Remove website document from the database
    await Website.findByIdAndRemove(websiteId);

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error deleting website' });
  }
});

module.exports = router;
