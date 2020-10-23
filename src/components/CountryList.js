import React, { useState, useEffect } from 'react';
import { getCountries } from '../api/index';
import Country from './Country';

import { Search } from 'semantic-ui-react';

const CountryList = (props) => {
	const [filterText, setFilterText] = useState('');

	const SearchBar = () => {
		return (
			<div>
				<Search
					input="text"
					autoFocus={true} // Because SearchBar losing focus after typing the first letter
					showNoResults={false}
					value={filterText}
					onSearchChange={(event) => setFilterText(event.target.value.toLowerCase())}
					size={"small"}
				/>
			</div>
		);
	};

	// const randomColor = () => {
	// 	var color = Math.floor(Math.random() * 16777216).toString(16);
	// 	return '#000000'.slice(0, -color.length) + color;
	// }


	let listOfCountries = props.countries
		.filter((country) => {
			if (!filterText) return true;
			if (country.Country.toLowerCase().includes(filterText)) {
				return true;
			}
			return false;
		})
		.map((country) => (
			<Country
				key={country.ISO2}
				countryName={country.Country}
				pickCountry={props.pickCountry}
				removeCountry={props.removeCountry}
				color={country.Color}
				countryColorChange={props.countryColorChange}
			/>
		));

	return (
		<div className="searchCountries" >
			<SearchBar className="search-bar" placeholder="Select country" />
			<div className="countryList"> 
			{listOfCountries}
			</div>
		</div>
	);
};


// const SearchBar = () => {
// 	const [filterText, setFilterText] = useState('');
// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				autoFocus={true} // Because SearchBar losing focus after typing the first letter
// 				value={filterText}
// 				onChange={(e) => setFilterText(e.target.value.toLowerCase())}
// 			/>
// 		</div>
// 	);
// };

// class CountryList extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<SearchBar />
// 			</div>
// 		);
// 	}

// };

export default CountryList;
