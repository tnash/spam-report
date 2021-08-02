const mongoose = require('mongoose');
const config = require('config');
const db = config.get('dbConfig');

const connectDB = async () => {
	try {
		let mongoURI = 'mongodb://' +
			// db.mongoUser + ':' +
			// db.mongoPassword + '@' +
			db.mongoHost + ':' +
			db.mongoPort + '/' +
			db.mongoDatabase;

		await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: true
		});

		console.log('MongoDB Connected');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;

