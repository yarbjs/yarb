import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Routes (files in /src/views/)
import Home from './views/Home'
import About from './views/About'

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
export default Routes
