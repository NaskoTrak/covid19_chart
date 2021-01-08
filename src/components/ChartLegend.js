import React from 'react';
import { DiscreteColorLegend } from 'react-vis';

const mappedLegend = (checkedCountries) => {
	return checkedCountries.map((c) => {
		return { title: c.countryName, color: c.color };
	});
};

const ChartLegend = (props) => {
	return (
		<DiscreteColorLegend
			className="legend"
			height={200}
			width={200}
			items={mappedLegend(props.checkedCountries)}
		/>
	);
};

export default ChartLegend;
