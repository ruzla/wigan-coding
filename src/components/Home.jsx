import React from 'react';
import '../styles/Home.scss';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="home-main-div">
        <h1 className="home-header">Hello and welcome</h1>
        <div className="home-content-text-div">
          <p><b>Wigan Coding</b> is a place for developer's/trainee-developer's and anyone who either know's, or want's to know more about <b>Coding</b>. We have a Meet-Up Group that takes place in Wigan Library every Saturday morning from 11am-1pm</p>
        </div>
        <div className="info-img">
          <img src="../src/images/gallery7.jpeg" alt="meet-up-image"></img>
          <img src="../src/images/gallery8.jpeg" alt="meet-up-image"></img>
        </div>
        <h2>We base our advise and curriculum around 3 Coding practices</h2>
        <div className="code-logo-div">
          <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="blank"><i class="fab fa-html5"><p className="code-p">HTML5</p></i></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="blank"><i class="fab fa-css3-alt"><p className="code-p">CSS3</p></i></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank"><i class="fab fa-js-square"><p className="code-p">JavaScript</p></i></a>
        </div>
        <p>Click any of these icon's to learn more</p>
      </div>
    )
  }
}

export default Home;