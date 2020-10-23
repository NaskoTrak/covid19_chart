import React from 'react';
import {
	XYPlot,
	XAxis,
	YAxis,
	HorizontalGridLines,
	LineSeries,
} from 'react-vis';
import styles from '../Style.css';

function getRanNum() {
	return Math.floor(Math.random() * 20);
}

const chartDataB = [
	{ x: 1, y: 10 },
	{ x: 3, y: 15 },
	{ x: 6, y: 30 },
];

const chartDataA = [
	{ x: getRanNum(), y: getRanNum() },
	{ x: getRanNum(), y: getRanNum() },
	{ x: getRanNum(), y: getRanNum() },
	{ x: getRanNum(), y: getRanNum() },
	{ x: getRanNum(), y: getRanNum() },
];

const Chart = (props) => {
	const countryLines = (checkedCountries) => {

		return checkedCountries.map((c) => {
			return (
				<LineSeries className="line"
					key={c.countryName}
					color={c.color}
					data={c.countryData.map((el) => {
						return {
							x: el.Date,
							y: el[props.chosenData],
						};
					})}
				/>
			);
		});
	};

	return (
		<div className="chart">
			<XYPlot xType="time" width={1480} height={600} margin={{ left: 70, right: 5 }} style={{backgroundColor: "white"}} >
				<HorizontalGridLines />
				{countryLines(props.checkedCountries)}
				<XAxis />
				<YAxis />
			</XYPlot>
		</div>
	);
};

export default Chart;
