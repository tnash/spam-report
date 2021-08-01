const express = require('express');

const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Define routes
app.use('/api/spam', require('./routes/reports'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${port}'));
