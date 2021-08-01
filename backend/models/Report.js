const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ReportReferenceSchema = mongoose.Schema( {
	referenceId: {
		type: String,
		required: true
	},
	referenceType: {
		type: String,
		required: true
	}
});

const ReportPayloadSchema = mongoose.Schema({
	source: {
		type: String,
		required: true
	},
	reportType: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: false
	},
	reportId: {
		type: String,
		required: true
	},
	referenceResourceId: {
		type: String,
		required: true
	},
	referenceResourceType: {
		type: String,
		required: true
	}
});

const ReportSchema = mongoose.Schema({
	id: {
		// type: mongoose.Schema.Types.ObjectId,
		// ref: 'spam',
		type: String,
		required: true
	},
	source: {
		type: String,
		required: true
	},
	sourceIdentityId: {
		type: String,
		required: true
	},
	reference: {
		type: ReportReferenceSchema
	},
	state: {
		type: String,
		required: true
	},
    payload: {
		type: ReportPayloadSchema,
		required: true
	},
	blocked: {
		type: Boolean
	},
	resolved: {
		type: Boolean
	},
	created: {
		type: Date,
		required: true
	}
});

// Set default options for all queries
mongoosePaginate.paginate.options = {
	lean: false, // Return plain javascript objects instead of Mongoose documents.
	limit: 1000
};

ReportSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('report', ReportSchema);
