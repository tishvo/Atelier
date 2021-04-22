import React from 'react';

class ThumbnailCarouselMiniPic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.index === this.props.isSelected) {

      return (
        <div id="af-thumbnail-carousel-mini-image-box-selected">
          <img id="af-thumbnail-carousel-mini-image" src={this.props.imgUrl.thumbnail_url} onClick={() => this.props.select(this.props.index)}></img>
        </div>
      )


    } else {

      return (
        <div id="af-thumbnail-carousel-mini-image-box">
          <img id="af-thumbnail-carousel-mini-image" src={this.props.imgUrl.thumbnail_url} onClick={() => this.props.select(this.props.index)}></img>
        </div>
      )
    }
  }

}

export default ThumbnailCarouselMiniPic;