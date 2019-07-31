import React from 'react'
import Routes from '../Routes'

class DefaultLayout extends React.Component {

  state = {
    layoutCreatedOn: Date(),
  };

  render() {
    return(
      <div className="wrapper">
        <h3>I'm the default layout {this.state.layoutCreatedOn}</h3>
        {this.props.children}
        <Routes />
      </div>
    )
  }
}

export default DefaultLayout
