import {
	GET_REPORTS,
	BLOCK_REPORT,
	RESOLVE_REPORT,
	REPORT_ERROR
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_REPORTS:
			return {
				...state,
				reports: action.payload,
				loading: false
			};
		case RESOLVE_REPORT:
			return {
				...state,
				reports: removeResolvedReportInList(state.reports, action.payload),
				loading: false
			};
		case BLOCK_REPORT:
			return {
				...state,
				reports: replaceReportInList(state.reports, action.payload),
				loading: false
			};
		case REPORT_ERROR:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
}

const replaceReportInList = (existingReports, reportToReplace) => {
	const reportIndex = existingReports.findIndex(report => report.id === reportToReplace.id);
	if (reportIndex > -1) {
		existingReports[reportIndex] = reportToReplace;
	}
	return existingReports;
}

const removeResolvedReportInList = (existingReports, reportToRemove) => {
	const reportIndex = existingReports.findIndex(report => report.id === reportToRemove.id);
	if (reportIndex > -1) {
		existingReports.splice(reportIndex, 1);
	}
	return existingReports;
}
