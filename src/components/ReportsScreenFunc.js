import React from 'react';
import Report from './Report';

function ReportsScreenFunc(props) {

	const tableBody = props.reports.map((report, index) => {
		return <Report key={report.id} report={report} archive={props.archive}/>
	});

	const appTable = (
		<table>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Date of Birth</th>
				<th>Score</th>
				<th>Phone Number</th>
				<th>Image</th>
			</tr>
			<tbody>
				{tableBody}
			</tbody>
		</table >
	);

	return appTable;
}
export default ReportsScreenFunc;
