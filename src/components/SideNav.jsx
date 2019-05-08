import React from 'react';
import '../styles/SideNav.scss';
import { Link } from 'react-router-dom'


class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="side-nav-div">
        <div className="links-div">
          <ul className="side-nav-list">
            <Link className="routes" to="/Home"><li className="list-item">Home</li></Link>
            <Link className="routes" to="/About"><li className="list-item">About</li></Link>
            <Link className="routes" to="/Gallery"><li className="list-item">Gallery</li></Link>
            <Link className="routes" to="/LearnMore"><li className="list-item">Learn More</li></Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default SideNav;