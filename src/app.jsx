import React from 'react';
import Nav from '../src/components/nav';
import SideNav from '../src/components/SideNav';
import { Route } from 'react-router-dom';
import About from '../src/components/About';
import Gallery from '../src/components/Gallery';
import Home from '../src/components/Home';


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
        <SideNav />
        <Route
          exact
          path="/Home"
          component={Home}
        />
        <Route
          exact
          path="/About"
          component={About}
        />
        <Route
          exact
          path="/Gallery"
          component={Gallery}
        />
        {/* <Route
          exact
          path="/Learn"
          component={LearnMore}
        /> */}
      </React.Fragment>
    )
  }
}

export default App;