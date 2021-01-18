import React, { useState } from 'react';
import Country from './Country';

import { Search, Button } from 'semantic-ui-react';

const CountryList = (props) => {
	const [filterText, setFilterText] = useState('');

	const SearchBar = () => {
		return (
			<div>
				<Search
					input="text"
					placeholder="Search countries"
					autoFocus={true} // Because SearchBar losing focus after typing the first letter
					showNoResults={false}
					value={filterText}
					onSearchChange={(event) =>
						setFilterText(event.target.value.toLowerCase())
					}
					size={'small'}
				/>
			</div>
		);
	};

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
		<div className="searchCountries">
			<SearchBar className="search-bar" placeholder="Select country" />
			<div className="countryList">{listOfCountries}</div>
		</div>
	);
};

export default CountryList;
