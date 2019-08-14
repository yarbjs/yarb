import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Views (files in /src/views/)
import Home from './views/Home'
import NotFound from './views/NotFound'

// Routes class definition
class Routes extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/" component={ NotFound } />
      </Switch>
    )
  }
}

// exports Routes class
export default Routes
