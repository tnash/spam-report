const express = require('express');
const router = express.Router();
const fs = require("fs");

const app = express();

const Report = require('../models/Report');

// Init Middleware
app.use(express.json({extended: false})); //accept body data in json form

// Return all spam reports that are not resolved
router.get('/', async (req, res) => {
	try {
		let reportData = fs.readFileSync('./data/reports.json');
		let reports = JSON.parse(reportData);
		Report.insertMany(reports.elements);
		// console.log(JSON.stringify(reports.elements));
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Error loading data')
	}
});

module.exports = router;


