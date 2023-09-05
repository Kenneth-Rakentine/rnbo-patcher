const express = require('express');
const router = express.Router();
const Collection = require('../../models/collection');

//create new
router.post('/', async (req, res) => {
  try {
    const { name, userId } = req.body;

    const collection = new Collection({
      name,
      userId,
      patches: [], 
    });

    const savedCollection = await collection.save();

    res.status(201).json(savedCollection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating collection' });
  }
});

//retrieve user collections
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    //include patches
    const collections = await Collection.find({ userId }).populate('patches');

    res.status(200).json(collections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error retrieving collections' });
  }
});

//update collection title
router.put('/:collectionId', async (req, res) => {
  try {
    const collectionId = req.params.collectionId;
    const { name } = req.body;

    const updatedCollection = await Collection.findByIdAndUpdate(
      collectionId,
      { name },
      { new: true }
    );

    res.status(200).json(updatedCollection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating collection' });
  }
});

//delete collection
router.delete('/:collectionId', async (req, res) => {
  try {
    const collectionId = req.params.collectionId;

    await Collection.findByIdAndRemove(collectionId);

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error deleting collection' });
  }
});

module.exports = router;
