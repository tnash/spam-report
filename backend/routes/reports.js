const express = require('express');
const router = express.Router();

const app = express();

const Report = require('../models/Report');

// Init Middleware
app.use(express.json({extended: false})); //accept body data in json form

// Return all spam reports that are not resolved
router.get('/', async (req, res) => {
	try {
		const reports = await Report.paginate({resolved: null} || {resolved: false});
		res.send(reports);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Database Error')
	}
});

// Return a specific report
// @route	GET api/spam/:id
// @desc	Return the report record with the specified id
// @access	Public
router.get('/:id', async (req, res) => {
	try {
		const reports = await Report.find({id: req.params.id});
		res.send(reports);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Database Error')
	}
});



// Block the spam report
// @route	GET api/spam/block/:id
// @desc	Block a specific report record
// @access	Public
router.put('/block/:reportId',
	async (req, res) => {
		let reportId = req.params.reportId;
		try {
			const filter = {id: reportId};
			const update = {blocked: true};
			let spamRecord = await Report.findOneAndUpdate(filter, update, {new: true});
			if (!spamRecord) {
				return res.status(400).json({msg: 'Spam report record not found'});
			} else {
				res.send(spamRecord);
			}
		} catch (err) {
			console.log(err);
		}
	});

// Resolve the spam report
// @route	GET api/spam/resolve/:id
// @desc	Block a specific report record
// @access	Public
router.put('/resolve/:reportId',
	async (req, res) => {
		let reportId = req.params.reportId;
		try {
			const filter = {id: reportId};
			const update = {resolved: true};
			let spamRecord = await Report.findOneAndUpdate(filter, update, {new: true});
			if (!spamRecord) {
				return res.status(400).json({msg: 'Spam report record not found'});
			} else {
				res.send(spamRecord);
			}
		} catch (err) {
			console.log(err);
		}
	});

module.exports = router;
