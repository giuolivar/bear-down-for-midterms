const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bear_down_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Bear Down for Midterms API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
