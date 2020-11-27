import React, { useState } from 'react'

import './App.scss'
import { Homepage } from './components'

export const App = () => {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(state => !state)
  }

  return (
    <div className={`theme--${dark ? 'dark' : 'light'}`}>
      <div className="bg-primary">
        <Homepage toggleTheme={toggleTheme} />
      </div>
    </div>
  )
}
