const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Proxy endpoint
app.get('/api/menu', async (req, res) => {
  try {
    const response = await axios.get('http://161.97.91.40:8079/menu/menues');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching menu:', error.message);
    res.status(500).json({ error: 'Error loading menu' });
  }
});

// Servir index.html en root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});