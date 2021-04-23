import React from 'react';
import ThumbnailCarouselMiniPic from './ThumbnailCarouselMiniPic.jsx'


class ThumbnailCarouselMini extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let imageArray = this.props.images;

    return (
      <div id="af-thumbnail-carousel-mini-box" style={this.props.height}>
        <div id="af-thumbnail-carousel-mini">
          {imageArray.map((imgUrl, index) => {
            return <ThumbnailCarouselMiniPic isSelected={this.props.currentSelected} key={index} index={index} imgUrl={imgUrl} select={this.props.select} />
          })}
        </div>
      </div>

    )


  }

}

export default ThumbnailCarouselMini;