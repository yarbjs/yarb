import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route } from 'react-router-dom'

// Routes (files in /src/pages/)
import Home from './pages/Home'
import About from './pages/About'

// Routes class definition
class Routes extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
      </Switch>
    )
  }
}

// exports Routes class
export default hot(module)(Routes)
