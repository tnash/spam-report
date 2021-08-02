import React from 'react';
import PropTypes from 'prop-types';

const ReportItem = ({report}) => {
	const {id, source, state, payload, blocked, resolved} = report;

	return (
		<div className='card bg-light'>
			<h3 className="text-primary text-left">
				id: {id}{' '}
				<span className={'badge ' + (state === 'OPEN' ?
					'badge-success' : 'badge-primary')}>
					{state.charAt(0) + state.slice(1)}
				</span>
				{' '}Message:{' '}{payload.message}
				{' '}Type:{' '}{payload.reportType.charAt(0) + payload.reportType.slice(1)}
			</h3>
			<p>
				<button className="btn btn-danger btn-sm">Block</button>
				<button className="btn btn-dark btn-sm">Resolve</button>
			</p>
		</div>
	);
};

ReportItem.propTypes = {
	report: PropTypes.object.isRequired
};

export default ReportItem;
