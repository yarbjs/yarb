import React from 'react';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h4>Nick Jones</h4>
        <p>A designer and developer in New York City.</p>
        <div className="row">
          <div className="row__element">Here is some content</div>
          <div className="row__element">Here is some content</div>
        </div>
      </div>
    )
  }
}

export default Home;
