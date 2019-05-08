import React from 'react';
import Nav from '../src/components/nav';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <Nav />

      </React.Fragment>
    )
  }
}

export default App;