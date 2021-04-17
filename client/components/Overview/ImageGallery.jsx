import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageArray: this.props.images
    }
  }

  render() {
    return (
      <Carousel id="af-carousel" showArrows={true} centerMode={true}>
        {this.props.images.map((image, index) =>

          <div key={index}>
            <img key={index} id="af-main-image" src={this.props.images[index]['url']} />
          </div>

        )



        }





      </Carousel>



    )
  }
}

export default ImageGallery;