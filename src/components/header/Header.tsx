import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import './header.scss'

export const Header = ({ toggleTheme }: { toggleTheme: () => void }) => {
  return (
    <header className="header bg-secondary">
      <div className="header__content">
        <h2 className="color-primary">Where in the world?</h2>
        <div onClick={toggleTheme} className="header__night-mode">
          <FontAwesomeIcon className="header__night-mode--icon color-primary" icon={faMoon} />
          <span className="color-primary">Dark Mode</span>
        </div>
      </div>
    </header>
  )
}