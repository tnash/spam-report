import React, {Fragment, useContext, useEffect} from 'react';
import ReportContext from '../../context/report/reportContext';
import ReportItem from "./GridReportItem";
import Spinner from "../layout/Spinner";

const Reports = () => {
	const reportContext = useContext(ReportContext);

	const {reports, getReports, loading} = reportContext;

	// Load the reports from the server when this component mounts.
	useEffect(() => {
		console.log('Get reports');
		getReports();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			{reports != null ? () => {
					reports.map(report => (
						<ReportItem key={report.id} report={report}/>
					))
				}
				: <Spinner/>}
		</Fragment>
	);
};

export default Reports;
