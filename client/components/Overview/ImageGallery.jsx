import React from 'react';
import StyleSelector from './StyleSelector.jsx'
import ThumbnailCarousel from './ThumbnailCarousel.jsx'
import ThumbnailCarouselMini from './ThumbnailCarouselMini.jsx'

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      widthStyle: { width: '500px' },
      expand_clicked: false,
      currentSelected: 0

    }
  }




  render() {

    if (this.props.currentIndex === 0) {
      return (
        <div>



          <div id="af-image-container" style={this.props.width}>
            <div id="af-image-expand"
              onClick={this.props.shrink}></div>

            <img id={this.props.imgId}
            onClick={this.props.click}
              src={this.props.images[this.props.currentIndex]['url']} >
            </img>

            <div id="af-image-next"
              onClick={() =>
                this.props.next(this.props.currentIndex)
              }>
        </div>

          </div>
          <ThumbnailCarousel currentSelected={this.props.currentSelected} width={this.props.thumbnailsWidth} images={this.props.images} select={this.props.select}/>
          <ThumbnailCarouselMini currentSelected={this.props.currentSelected} height={this.props.thumbnailsMiniHeight} images={this.props.images} select={this.props.select}/>
        </div>)
    }
    if (this.props.currentIndex === this.props.images.length - 1) {
      return (
      <div>
        <div id="af-image-container" style={this.props.width}>
        <div id="af-image-expand"
          onClick={this.props.shrink}></div>

        <div id="af-image-prev"
          onClick={() =>
            this.props.prev(this.props.currentIndex)
          }></div>

        <img id={this.props.imgId} onClick={this.props.click} src={this.props.images[this.props.currentIndex]['url']}>
        </img>
        </div>
        <ThumbnailCarousel currentSelected={this.props.currentSelected} width={this.props.thumbnailsWidth} images={this.props.images} select={this.props.select}/>
        <ThumbnailCarouselMini currentSelected={this.props.currentSelected} height={this.props.thumbnailsMiniHeight} images={this.props.images} select={this.props.select}/>
      </div>)
    }
    return (
      <div>
      <div id="af-image-container" style={this.props.width}>
        <div id="af-image-expand"
          onClick={this.props.shrink}
        ></div>

        <div id="af-image-prev"
          onClick={() =>
            this.props.prev(this.props.currentIndex)
          }></div>

        <img id={this.props.imgId}
        onClick={this.props.click}
        src={this.props.images[this.props.currentIndex]['url']}></img>

        <div id="af-image-next"
          onClick={() =>
            this.props.next(this.props.currentIndex)
          }></div>
      </div>
      <ThumbnailCarousel currentSelected={this.props.currentSelected} width={this.props.thumbnailsWidth} images={this.props.images} select={this.props.select}/>
      <ThumbnailCarouselMini currentSelected={this.props.currentSelected} height={this.props.thumbnailsMiniHeight} images={this.props.images} select={this.props.select}/>
      </div>)

  }
}

export default ImageGallery;