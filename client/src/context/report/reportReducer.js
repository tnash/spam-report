import {
	GET_REPORTS,
	BLOCK_REPORT,
	RESOLVE_REPORT,
	REPORT_ERROR
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_REPORTS:
			console.log('Reducing GET REPORTS: ', action.payload);
			return {
				...state,
				reports: action.payload,
				loading: false
			};
		case RESOLVE_REPORT:
			return {
				...state,
				reports: state.report.filter(report => report.id !== action.payload),
				loading: false
			};
		case BLOCK_REPORT:
			return {
				...state,
				reports: state.report.filter(report => report.id !== action.payload),
				loading: false
			};
		case REPORT_ERROR:
			return {...state,
			error: action.payload
			};
		default:
			return state;
	}
}
