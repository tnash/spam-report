import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import ReportContext from '../../context/report/reportContext';

const ReportItem = ({report}) => {
	const reportContext = useContext(ReportContext);
	const {resolveReport, blockReport} = reportContext;

	const {id, source, state, payload, blocked, resolved} = report;

	const onResolve = () => {
		resolveReport(id);
	}

	const onBlock = () => {
		blockReport(id);
	}

	return (
		<div className='card bg-light'>
			<MDBContainer className='overflow-hidden'>
				<MDBRow className="mb-3">
					<MDBCol size='6' className='col-auto'>
						id: {id}
					</MDBCol>
					<MDBCol size='4' className='col-auto'>
						Type: {payload.reportType.charAt(0) + payload.reportType.slice(1).toLowerCase()}
					</MDBCol>
					<MDBCol size='2' className='col-auto'>
						<button className="btn btn-danger btn-sm" onClick={onBlock}>Block</button>
					</MDBCol>
				</MDBRow>
				<MDBRow>
					<MDBCol size='6' className='col-auto'>
						State: {state.charAt(0) + state.slice(1).toLowerCase()}
					</MDBCol>
					<MDBCol size='4' className='col-auto'>
						Message: {payload.message}
					</MDBCol>
					<MDBCol size='2' className='col-auto'>
						<button className='btn btn-dark btn-sm' onClick={onResolve}>Resolve</button>
					</MDBCol>
				</MDBRow>
				<MDBRow>
					<MDBCol size='12'>
						<div className='py-3 col-example'>Details</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
};

ReportItem.propTypes = {
	report: PropTypes.object.isRequired
};

export default ReportItem;
