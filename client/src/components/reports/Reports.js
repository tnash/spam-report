import React, {Fragment, useContext, useEffect} from 'react';
import ReportContext from '../../context/report/reportContext';
import ReportItem from "./GridReportItem";

const Reports = () => {
	const reportContext = useContext(ReportContext);

	const {reports, getReports, loading} = reportContext;

	// Load the reports from the server when this component mounts.
	useEffect(() => {
		getReports();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			{
				reports.map(report => (
					<ReportItem key={report.id} report={report}/>
				))
			}
		</Fragment>
	);
};

export default Reports;
