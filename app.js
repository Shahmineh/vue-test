// Require
const express = require('express');

// Create express server
const app = express();

// Express middleware
app.use(express.static('www'));

// Start server
app.listen(3000, () =>
  console.log('Webserver listening on port 3000')
);
