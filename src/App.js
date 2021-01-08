import React from 'react';
import { getCountries, getCountry } from './api';
import CountryList from './components/CountryList';
import Chart from './components/Chart';
import DataPicker from './components/DataPicker';
import ChartLegend from './components/ChartLegend';

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

	pickCountry = async (country, countryColor) => {
		const data = await getCountry(country, this.state.countries);

		let combinedState = this.state.checkedCountries;
		combinedState.push({
			color: countryColor,
			countryName: country,
			countryData: data,
		});
		this.setState(combinedState);
	};

	removeCountry = (country) => {
		console.log(
			'Will try to remove: ' +
				country +
				' ' +
				this.state.checkedCountries.length
		);
		const data = this.state.checkedCountries.filter((e) => {
			return e.countryName !== country;
		});
		this.setState({ checkedCountries: data });
	};

	countryColorChange = (countryName, newColor) => {
		this.removeCountry(countryName);
		const countryData = this.state.countries;
		countryData.forEach((c) => {
			if (c.Country === countryName) {
				console.log('Nameri');
				c.Color = newColor;
			}
		});
		this.setState({ countries: countryData });
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
					className="legend"
					checkedCountries={this.state.checkedCountries}
				/>
				<Chart
					className="chart"
					checkedCountries={this.state.checkedCountries}
					chosenData={this.state.chosenData}
				/>
				<DataPicker
					className="dataPicker"
					setDataPicker={this.setDataPicker}
					dataChoices={this.state.dataChoices}
					chosenData={this.state.chosenData}
				/>
			</div>
		);
	}
}

export default App;
