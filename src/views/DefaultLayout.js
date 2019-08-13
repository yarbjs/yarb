import React from 'react'
import Routes from '../Routes'

class DefaultLayout extends React.Component {

  state = {
    layoutCreatedOn: Date(),
  };

  render() {
    return(
      <div className="wrapper">
        <Routes />
      </div>
    )
  }
}

export default DefaultLayout
