require('dotenv').config();
require('./config/database');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/User');
const Website = require('./models/websiteSchema');
const Collection = require('./models/collection');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// Collections route
app.use('/api/collections', require('./routes/api/collections'));

app.use('/api/websites', require('./routes/api/websites'));

// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// Patches route
app.post('/api/users/:userId/websites', async (req, res) => {
  const { userId } = req.params;
  const { url, title, collectionName } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      console.log(`User with ID ${userId} not found.`);
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Find or create the collection with the given name
    let collection = await Collection.findOne({ name: collectionName, userId: user._id });

    if (!collection) {
      // If the collection doesn't exist, create it
      collection = new Collection({ name: collectionName, userId: user._id });
      await collection.save();
    }

    const website = new Website({ userId: user._id, url, title, collectionId: collection._id });

    await website.save();

    // Respond with success
    res.json({ success: true, message: 'Website state saved successfully' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ success: false, message: 'Error saving website state' });
  }
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
