import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherStatistics = (props) => {
    const kelvinToFahrenheit = (input) => (
        Math.floor((input - 273.15) * 9/5 + 32)
    )

    const temp = kelvinToFahrenheit(props.countryWeather.main.temp)
    const description = props.countryWeather.weather['0'].description
    const iconCode = props.countryWeather.weather['0'].icon
    const weatherIcon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`

    return (
        <ul>
            <li>Temperature: {temp} &deg;F</li>
            <li>Conditions: {description}</li>
            <img src={weatherIcon} alt="weather icon" />
        </ul>
    )
}

const FullCountryEntry = ({ country }) => {
    const [isLoading, setLoading] = useState(true)
    const [countryWeather, setCountryWeather] = useState({})
    const api_key = process.env.REACT_APP_API_KEY
    const name = country.name.common
    const capital = country.capital[0]
    const population = country.population
    const languages = Object.values(country.languages)
    const flagImage = country.flags.png


    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
            .then(response => {
                setCountryWeather(response.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={flagImage} alt="Flag image"/>
            <h3>Info</h3>
            <ul>
                <li>Capital: {capital}</li>
                <li>Population: {population}</li>
                <li>Languages: {languages.join(', ')}</li>
            </ul>
            <h3>Weather in {capital}</h3>
            <WeatherStatistics countryWeather={countryWeather}/>
        </div>
    )

}

const Result = (props) => {

    const handleClick = () => {
        const showFullCountryEntry = () => {
            props.setSearchBar(props.country.name.common.toString())
        }

        return showFullCountryEntry()


    }

    return (
        <div>
            <li>{props.country.name.common}</li>
            <button onClick={handleClick}>Show info</button>
        </div>
    )
}


const Results = ({ countryData, countrySearch, setSearchBar }) => {
    const filteredCountries = countrySearch.length === 0
        ? []
        : countryData.filter(entry => (
            entry.name.common
                .toString()
                .toLowerCase()
                .startsWith(countrySearch.toLowerCase())
        ))

    if (filteredCountries.length === 1) {
        return (
            <FullCountryEntry country={filteredCountries[0]} />
        )
    }
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {filteredCountries.map(country => (
                    <Result
                        key={country.name.common.toString()}
                        country={country}
                        setSearchBar={setSearchBar}
                        filteredCountries={filteredCountries}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Results