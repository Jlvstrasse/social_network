// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network', {
  
});

mongoose.set('debug', true);

app.use(require('./routes'));

// Add a route to handle the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Social Network API');
});

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
