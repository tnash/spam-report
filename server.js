const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// Connect Database
connectDB();

// Define routes
app.use('/api/reports', require('./routes/reports'));
app.use('/api/load', require('./routes/loadData'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${port}'));
