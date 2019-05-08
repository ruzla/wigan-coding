import React from 'react';
import '../styles/Gallery.scss';


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="gallery-main-div">
        <h2>Have a look at what we do</h2>
        <div className="gallery-img-div">
          <img src="../src/images/gallery1.jpeg" alt="meet-up-image"></img>
          <img src="../src/images/gallery2.jpeg" alt="meet-up-image"></img>
          <img src="../src/images/gallery3.jpg" alt="meet-up-image"></img>
          <img src="../src/images/gallery4.jpeg" alt="meet-up-image"></img>
          <img src="../src/images/gallery5.jpeg" alt="meet-up-image"></img>
          <img src="../src/images/gallery6.jpeg" alt="meet-up-image"></img>


        </div>

      </div>
    )
  }
}

export default Gallery;