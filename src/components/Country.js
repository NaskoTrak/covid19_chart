import React, { useEffect, useState } from 'react';

const Country = (props) => {

	// const [color, setColor] = useState(props.color);

	const handleInputChange = (event) => {
		// console.log('is checked: ' + event.target.checked);

		if (event.target.checked) {
			props.pickCountry(props.countryName, props.color);
			console.log('Will add country: ' + props.countryName + ' ' + props.color);
		} else {
			// console.log('Will remove country: ' + props.countryName);
			props.removeCountry(props.countryName);
		}
	}

	return (
		<div className="country">
			<label htmlFor={props.countryName}>{props.countryName}</label>
			{/* <input type="checkbox" name={props.key} onChange={() => props.pickCountry(props.countryName ,randomColor)} /> */}
			{/* <input type="checkbox" id={props.countryName} checked={() => props.pickCountry(props.countryName, randomColor)} /> */}
			<input
				type="checkbox"
				id={props.countryName}
				onChange={handleInputChange}
			/>
			<input type="color" defaultValue={props.color} onChange={e => props.countryColorChange(props.countryName, e.target.value)} />
			{/* <input type="color" defaultValue={color} onChange={e => setColor(e.target.value)} /> */}
			{/* {console.log("The color of country " + props.countryName + " is " + props.color )} */}
		</div>
	);
};

export default Country;
