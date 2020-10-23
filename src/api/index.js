import axios from 'axios';

const url = 'https://api.covid19api.com/';

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
        return data;
    }
    catch (error) {
        return error;
    }
};

const foundCountrySlug = (country, countries) => {
    return countries.find(c => c.Country === country).Slug;
};

export const getCountry = async (country, countries) => {

    const countrySlug = foundCountrySlug(country, countries);
    try{
        const { data } = await axios.get(`https://api.covid19api.com/country/${countrySlug}?from=2020-01-22T00:00:00Z&to=${(new Date().toISOString().slice(0, 10))}T00:00:00Z`);
        
        const mappedData = data.map((c) => ({
            Date: new Date(c.Date),
            Active: c.Active,
            Deaths: c.Deaths,
            Confirmed: c.Confirmed,
            Recovered: c.Recovered
        }));

        console.log('Mapped Data');
        console.log(mappedData);
        return mappedData;
    }
    catch (error) {
        return error;
    }
}

const randomColor = () => {
    var color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}

export const getCountries = async () => {
    try {
		const { data } = await axios.get(`https://api.covid19api.com/countries`);
        const sortedData = data.sort((a, b) => (a.Country > b.Country) ? 1 : -1);
        sortedData.forEach(function(c) {
            c.Color = randomColor();
        });
        // console.log("Vika se!!!!!!!!!!!!!!!" + JSON.stringify(sortedData));   
		return sortedData;
	} 
	catch (error) {
		return error;
	}
}

