const express = require('express');
const router = express.Router();
const Website = require('../../models/websiteSchema');  

//creat new patch(website)
router.post('/', async (req, res) => {
  try {
    const { userId, url, title } = req.body;

    //create new website document
    const website = new Website({
      userId,
      url,
      title,
    });

    //save website document to database
    const savedWebsite = await website.save();

    res.status(201).json(savedWebsite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating website' });
  }
});

//update patch title
router.put('/:websiteId', async (req, res) => {
  try {
    const websiteId = req.params.websiteId;
    const { title } = req.body;

    //update patch title
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

//delete patch
router.delete('/:websiteId', async (req, res) => {
  try {
    const websiteId = req.params.websiteId;

    //remove website document fromthe database
    await Website.findByIdAndRemove(websiteId);

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error deleting website' });
  }
});

module.exports = router;
