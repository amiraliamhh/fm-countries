import React from 'react'

import './list.scss'

export const List = () => {
  return (
    <div className="list">
      <div className="list__filters">
        <div className="list__search-input">
          <input type="text" placeholder="Search for a country ..." />
        </div>
      </div>
    </div>
  )
}
