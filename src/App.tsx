import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss'
import { Homepage, Header } from './components'
import { NotFound } from './components/error'

export const App = () => {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(state => !state)
  }

  return (
      <div className={`theme--${dark ? 'dark' : 'light'}`}>
        <div className="bg-primary bg">
          <Header toggleTheme={toggleTheme} />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
  )
}
