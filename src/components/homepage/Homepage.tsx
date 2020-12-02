import React, { useEffect, useState } from 'react'

import {
  Filter,
  List
} from '../'
import { debounce } from '../utils'
import { Country } from '../interfaces/country'

export const Homepage = () => {
  const [countries, setCountries] = useState<Country[]>([])

  const fetchCountries = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const listOfCountries = await response.json()
    setCountries(listOfCountries)
  }

  const search = async (name: string) => {
    if (!name) {
      return fetchCountries()
    }
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      const listOfCountries = await response.json()
      setCountries(Array.isArray(listOfCountries) ? listOfCountries : [])
    } catch ({ message }) {
      alert(message)
    }
  }

  const searchDebounced = debounce(search, 5e2)
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
      <div className="container">
        <Filter onFilter={handleFilter} onRegionFilter={handleRegionFilter} />
        <List countries={countries} />
      </div>
    </>
  )
}
