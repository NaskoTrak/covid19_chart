import React from 'react';
import { DiscreteColorLegend } from 'react-vis';
import { Button } from 'semantic-ui-react';

const mappedLegend = (checkedCountries) => {
	return checkedCountries.map((c) => {
		return { title: c.countryName, color: c.color };
	});
};

const ChartLegend = (props) => {

	return (
		<div className="chartLegend">
			<DiscreteColorLegend
				className="legend"
				height={200}
				width={200}
				items={mappedLegend(props.checkedCountries)}
			/>
			<Button className='clearBtn'  color='red' icon='delete' onClick={() => props.removeAllCheckedCountries()} />
		</div>
	);
};

export default ChartLegend;
