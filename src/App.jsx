import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import './assets/scss/app.scss'

import Routes from './Routes'

class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <Routes />
      </div>
    )
  }
}

export default App
