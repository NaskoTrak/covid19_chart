import React from 'react';
import { getCountries, getCountry } from './api';
import CountryList from './components/CountryList';
import Chart from './components/Chart';
import DataPicker from './components/DataPicker';
import ChartLegend from './components/ChartLegend';
import Footer from './components/Footer';

import './Style.css';
import logo from './images/COVID19.png';

class App extends React.Component {
	state = {
		countries: [],
		date: {},
		checkedCountries: [],
		dataChoices: ['Active', 'Confirmed', 'Deaths', 'Recovered'],
		chosenData: 'Active',
	};

	async componentDidMount() {
		const countries = await getCountries();
		this.setState({ countries });
	}

	countryAlreadySelected = (countryName, checkedCountries) => {
		checkedCountries.forEach((c) => {
			if (c.Country === countryName) {
				return true;
			}
		});
		return false;
	};

	pickCountry = async (country, countryColor) => {
		if (this.countryAlreadySelected(country, this.state.checkedCountries)) {
			return;
		}
		const data = await getCountry(country, this.state.countries);

		let combinedState = this.state.checkedCountries;
		combinedState.push({
			color: countryColor,
			countryName: country,
			countryData: data,
		});
		this.setState({ checkedCountries: combinedState });
	};

	removeCountry = (country) => {
		const data = this.state.checkedCountries.filter((e) => {
			return e.countryName !== country;
		});
		this.setState({ checkedCountries: data });
	};

	removeAllCheckedCountries = () => {
		this.setState({ checkedCountries: [] });
		document.querySelectorAll('div.country>input[type=checkbox]').forEach( el => el.checked = false );  // Simple JS solution for uncheck all checkboxes; 
	};

	countryColorChange = (countryName, newColor) => {
		this.removeCountry(countryName);

		const countryData = this.state.countries;
		countryData.forEach((c) => {
			if (c.Country === countryName) {
				c.Color = newColor;
			}
		});

		this.setState({
			countries: countryData,
		});

		// Fix for chart doesn't change color after color change
		this.pickCountry(countryName, newColor);
	};

	setDataPicker = (choice) => {
		return this.setState({ chosenData: choice });
	};

	render() {
		return (
			<div className="container">
				<img className="logo" src={logo} alt="COVID-19" />
				<CountryList
					countries={this.state.countries}
					pickCountry={this.pickCountry}
					removeCountry={this.removeCountry}
					countryColorChange={this.countryColorChange}
				/>
				<ChartLegend
					checkedCountries={this.state.checkedCountries}
					removeAllCheckedCountries={this.removeAllCheckedCountries}
				/>
				<Chart
					checkedCountries={this.state.checkedCountries}
					chosenData={this.state.chosenData}
				/>
				<DataPicker
					setDataPicker={this.setDataPicker}
					dataChoices={this.state.dataChoices}
					chosenData={this.state.chosenData}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
