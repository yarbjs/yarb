import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'
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

export default hot(module)(App)
