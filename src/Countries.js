import React, { useEffect, useState } from "react";
import './index.css';

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const countries = await response.json();
                setCountries(countries);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCountryData();
    }, []);

    const handleClick = (country) => {
        setSelectedCountry(country);
    };

    return (
        <>
            <section className="grid">
                {countries.map((country) => {
                    const { cca3, name, population, capital, region, flags, latlng } = country;
                    return (
                        <article key={cca3} onClick={() => handleClick(country)}>
                            <div>
                                <img src={flags.png} alt={name.common} />
                                <div className="details">
                                    <h3 className="country-name">{name.common}</h3>
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    {selectedCountry && (
                <div className="selected-country-info">
                    <h2>THIS IS LATTITUE & LONGITUDE OF COUNTRY</h2>
                    <p>Latitude&Longitude: {latlng}</p>
                    
                </div>
            )}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
           
        </>
    );
};

export default Countries;
