import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import './header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h2>Where in the world?</h2>
        <div>
          <FontAwesomeIcon className="header__night-mode--icon" icon={faMoon} />
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  )
}