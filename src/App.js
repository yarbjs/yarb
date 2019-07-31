import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import DefaultLayout from './views/DefaultLayout'
import './assets/styles/app.scss'

import Routes from './Routes'

class App extends Component {
  render() {
    return(
      <DefaultLayout />
    )
  }
}

export default App
