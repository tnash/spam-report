import React from 'react';
import PropTypes from 'prop-types';

const ReportItem = ({report}) => {
	const {id, source, state, payload, blocked, resolved} = report;

	return (
		<div className='card bg-light d-flex justify-content-start' style={{height: '120px'}}>
			<div className="d-flex flex-column mb-1" style={{height: '20px'}}>
				<div className="mb-auto p-1">
					id: {id}
				</div>
				<div className="p-1">
					State: {state.charAt(0) + state.slice(1).toLowerCase()}
				</div>
				<div className="text-primary text-left">Details</div>
			</div>
			<div className="d-flex align-items-center flex-column mb-1" style={{height: '20px'}}>
				<div className="p-1">
					Type:{' '}{payload.reportType.charAt(0) + payload.reportType.slice(1).toLowerCase()}
				</div>
				<div className="p-1">
					Message: {payload.message}
				</div>
			</div>
			<div className="d-flex align-items-end flex-column mb-1" style={{height: '20px'}}>
				<div classaName=" p-1">
					<button className="btn btn-danger btn-sm">Block</button>
				</div>
				<div className="p-1">
					<button className="btn btn-dark btn-sm">Resolve</button>
				</div>
			</div>

		</div>
	);
};
ReportItem.propTypes = {
	report: PropTypes.object.isRequired
};

export default ReportItem;
