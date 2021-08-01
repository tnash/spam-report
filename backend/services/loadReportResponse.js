const fs = require('fs');
const Report = require('../models/Report');

let reportData = fs.readFileSync('./data/reports.json');
let reports = JSON.parse(reportData);
Report.insertMany(reports.elements);

