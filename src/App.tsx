import React from 'react'

import './App.scss'
import {
  Header,
  Filter,
  List
} from './components'

export const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Filter />
        <List />
      </div>
    </div>
  )
}
