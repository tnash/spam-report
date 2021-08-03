import React, {useReducer} from 'react';
import {
	BLOCK_REPORT,
	RESOLVE_REPORT,
	REPORT_ERROR,
	GET_REPORTS
} from '../types';
import ReportContext from './reportContext';
import reportReducer from './reportReducer';
import axios from 'axios';

const ReportState = props => {
	const initialState = {
		reports: [],
		error: null,
		loading: true
	};

	const [state, dispatch] = useReducer(reportReducer, initialState);

	// Get reports
	const getReports = async () => {
		// console.log('getReports');
		try {
			const res = await axios({
				url: `http://localhost:5000/api/reports`,
				method: 'get',
				timeout: 8000,
				headers: {
					'Content-Type': 'application/json',
				}
			});
			if (res.status === 200) {
				console.log('Response from server is ', res);
				dispatch({
					type: GET_REPORTS,
					loading: false,
					payload: res.data.docs
				});
			} else {
				dispatch({
					type: REPORT_ERROR,
					payload: "Server error"
				});
			}
		} catch (err) {
			console.log(err);
			dispatch({
				type: REPORT_ERROR,
				payload: err
			});
		}
	};


	// Block report
	const blockReport = async id => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			// eslint-disable-next-line
			const response = await axios.put(`http://localhost:5000/api/reports/${id}/block`, id, config);

			console.log(response);
			dispatch({
				type: BLOCK_REPORT,
				payload: response.data
			});
		} catch (err) {
			dispatch({
				type: REPORT_ERROR,
				payload: err
			});
		}
	};

	// Resolve report
	const resolveReport = async id => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			// eslint-disable-next-line
			const response = await axios.put(`http://localhost:5000/api/reports/${id}/resolve`, id, config);

			console.log('Response from Resolve request: ', response);
			dispatch({
				type: RESOLVE_REPORT,
				payload: response.data
			});
		} catch (err) {
			dispatch({
				type: REPORT_ERROR,
				payload: err
			});
		}
	};

	return (
		<ReportContext.Provider
			value={{
				reports: state.reports,
				error: state.error,
				resolveReport,
				blockReport,
				getReports
			}}
		>
			{props.children}
		</ReportContext.Provider>
	)
};

export default ReportState;
