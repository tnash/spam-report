const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) =>
	res.json({msg: 'Welcome to the Spam Report Manager Application'})
);

// Define routes
app.use('/api/spam', require('./routes/spamList'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${port}'));
