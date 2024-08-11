const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Handle the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'admin.html')); // Or user.html
});

// Export the handler function for Vercel
module.exports = app;
