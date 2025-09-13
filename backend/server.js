require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Welcome to Smart Mart Art Project Management API');
});

// Only listen when run directly
const port = process.env.PORT || 5000;
if (!module.parent) {
  app.listen(port, () => console.log(`Backend running on port ${port}`));
}

// Export app for tests
module.exports = app;