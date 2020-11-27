import React from 'react'

import './list.scss'
import { Country } from '../interfaces/country'

export const List = ({ countries = [] }: { countries: Country[] }) => {
  return (
    <>
      <div className="list">
        {
          countries.map((country, index) => {
            return (
              <div className="list__item bg-secondary" key={`${country.name}-${country.alpha3Code}-${index}`}>
                <div className="list__flag">
                  <img src={country.flag} alt={country.name}/>
                </div>
                <div className="list__country">
                  <h5 className="color-primary">{country.name}</h5>
                  <div className="list__country-info">
                    <p className="color-primary">
                      Population:
                      <span>{Intl.NumberFormat().format(country.population)}</span>
                    </p>
                    <p className="color-primary">
                      Region:
                      <span>{country.region}</span>
                    </p>
                    <p className="color-primary">
                      Capital:
                      <span>{country.capital}</span>
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
