import React, { useEffect, useState } from 'react'

import {
  Header,
  Filter,
  List
} from '../'
import { debounce } from '../utils'
import { Country } from '../interfaces/country'

export const Homepage = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const [countries, setCountries] = useState<Country[]>([])

  const fetchCountries = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const listOfCountries = await response.json()
    setCountries(listOfCountries)
  }

  const search = async (name: string) => {
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      const listOfCountries = await response.json()
      setCountries(Array.isArray(listOfCountries) ? listOfCountries : [])
    } catch ({ message }) {
      alert(message)
    }
  }

  const searchDebounced = debounce(search, 1e3)
  const handleFilter = (name: string) => {
    searchDebounced(name)
  }

  const handleRegionFilter = async (name: string) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/region/${name}`)
    const listOfCountries = await response.json()
    setCountries(listOfCountries)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <div className="container">
        <Filter onFilter={handleFilter} onRegionFilter={handleRegionFilter} />
        <List countries={countries} />
      </div>
    </>
  )
}
