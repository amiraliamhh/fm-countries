import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './filter.scss'

export const Filter = () => {
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

  return (
    <div className="filter__filters">
      <div className="filter__search-input">
        <input type="text" placeholder="Search for a country ..." />
        <FontAwesomeIcon className="filter__search-icon" color="#808080" icon={faSearch} />
      </div>
      <div className="filter__region" onClick={toggleRegions}>
        <span>Filter by Region</span>
        <FontAwesomeIcon icon={faChevronDown} size="xs" />

        {
          showRegions && (
            <div className="filter__regions-list">
              <p>Africa</p>
              <p>America</p>
              <p>Asia</p>
              <p>Europe</p>
              <p>Oceania</p>
            </div>
          )
        }
      </div>
    </div>
  )
}
