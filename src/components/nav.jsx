import React from 'react';
import '../styles/nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="nav-div">
        <div className="nav-header-div">
          <h1 className="nav-header">Wigan Coding<i className="fas fa-laptop-code"></i></h1>
          <p>A place for developers and coding newbies</p>
        </div>
        <div className="nav-icons-div">
          <a href="https://www.facebook.com/Rybrockers/" target="blank"><i className="fab fa-facebook-square"></i></a>
          <a href="https://twitter.com/WiganUp?lang=en-gb" target="blank"><i className="fab fa-twitter-square"></i></a>
          <a href="https://github.com/Wigan-Coding-Meet-Up" target="blank"><i className="fab fa-github"></i></a>
          <a href="mailto:brockley.ryan@yahoo.com" target="blank"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    )
  }
}

export default Nav;