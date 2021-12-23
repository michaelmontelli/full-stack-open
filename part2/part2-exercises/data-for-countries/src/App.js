import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Searchbar from './components/Searchbar'
import Results from './components/Results'

const App = () => {
    const [countryData, setCountryData] = useState([])
    const [countrySearch, setCountrySearch] = useState('')


    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountryData(response.data)
            })
    }, [])


    const updateCountrySearch = (event) => {
        setCountrySearch(event.target.value)
    }

    const setSearchBar = (name) => {
        setCountrySearch(name)
    }

    return (
        <div>
            <h1>Country-pedia</h1>
            <Searchbar value={countrySearch} onChange={updateCountrySearch} />
            <Results
                countryData={countryData}
                countrySearch={countrySearch}
                setSearchBar={setSearchBar}
            />

        </div>
    )
}

export default App