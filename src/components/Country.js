import React from 'react';

const Country = (props) => {
	const handleInputChange = (event) => {
		if (event.target.checked) {
			props.pickCountry(props.countryName, props.color);
		} else {
			props.removeCountry(props.countryName);
		}
	};

	return (
		<div className="country">
			<label htmlFor={props.countryName}>{props.countryName}</label>
			<input
				type="checkbox"
				id={props.countryName}
				onChange={handleInputChange}
			/>
			<input
				type="color"
				defaultValue={props.color}
				onChange={(e) =>
					props.countryColorChange(props.countryName, e.target.value)
				}
			/>
		</div>
	);
};

export default Country;
