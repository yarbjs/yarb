import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import './assets/scss/app.scss'

class App extends Component {
  render() {
    return(
      <div>Hello World!</div>
    )
  }
}

export default hot(module)(App)