import React, { useState, useEffect, ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './filter.scss'

export const Filter = ({ onFilter, onRegionFilter }: { onFilter: Function, onRegionFilter: Function }) => {
  const [showRegions, setShowRegions] = useState(false)

  const toggleRegions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setShowRegions(!showRegions)
  }

  const closeRegions = () => {
    setShowRegions(false)
  }

  useEffect(() => {
    document.addEventListener('click', closeRegions)
    return () => { document.removeEventListener('click', closeRegions) }
  }, [])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilter(e.target.value)
  }

  const filterByRegion = (e: any) => {
    if (e.target?.dataset) {
      onRegionFilter(e.target.dataset.name)
    }
  }

  return (
    <div className="filter__filters">
      <div className="filter__search-input">
        <input className="bg-secondary color-primary" type="text" placeholder="Search for a country ..." onChange={handleSearchChange} />
        <FontAwesomeIcon className="filter__search-icon" color="#808080" icon={faSearch} />
      </div>
      <div className="filter__region bg-secondary" onClick={toggleRegions}>
        <span className="color-primary">Filter by Region</span>
        <FontAwesomeIcon className="color-primary" icon={faChevronDown} size="xs" />

        {
          showRegions && (
            <div className="filter__regions-list bg-secondary" onClick={filterByRegion}>
              <p className="color-primary" data-name="africa">Africa</p>
              <p className="color-primary" data-name="americas">America</p>
              <p className="color-primary" data-name="asia">Asia</p>
              <p className="color-primary" data-name="europe">Europe</p>
              <p className="color-primary" data-name="oceania">Oceania</p>
            </div>
          )
        }
      </div>
    </div>
  )
}
