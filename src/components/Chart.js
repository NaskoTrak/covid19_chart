import React from 'react';
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	LineSeries,
} from 'react-vis';

const countryLines = (checkedCountries, chosenData) => {
	if (checkedCountries.length > 0) {
	}
	return checkedCountries.map((c) => {
		return (
			<LineSeries
				className="line"
				key={c.countryName}
				color={c.color}
				data={c.countryData.map((el) => {
					return {
						x: el.Date,
						y: el[chosenData],
					};
				})}
			/>
		);
	});
};

const Chart = (props) => {
	return (
		<div className="chart">
			<XYPlot
				xType="time"
				width={1480}
				height={600}
				margin={{ left: 70, right: 5 }}
				style={{ backgroundColor: 'white' }}
			>
				<HorizontalGridLines />
				{countryLines(props.checkedCountries, props.chosenData)}
				<XAxis />
				<YAxis />
			</XYPlot>
		</div>
	);
};

export default Chart;
