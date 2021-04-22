import React from 'react';
import ThumbnailCarouselPic from './ThumbnailCarouselPic.jsx'

class ThumbnailCarousel extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let imageArray = this.props.images;


    return (
      <div id="af-thumbnail-carousel-box" style={this.props.width}>
        <div id="af-thumbnail-carousel">
          {imageArray.map((imgUrl, index) => {
            return <ThumbnailCarouselPic isSelected={this.props.currentSelected} key={index} index={index} imgUrl={imgUrl} select={this.props.select} />
          })}
        </div>
      </div>

    )


  }

}

export default ThumbnailCarousel;