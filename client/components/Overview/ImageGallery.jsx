import React from 'react';
import StyleSelector from './StyleSelector.jsx'
import ThumbnailCarousel from './ThumbnailCarousel.jsx'

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      widthStyle: { width: '500px' },
      expand_clicked: false,
    }
  }



  render() {

    if (this.props.currentIndex === 0) {
      return (
        <div>



          <div id="af-image-container" style={this.props.width}>
            <div id="af-image-expand"
              onClick={this.props.click}></div>

            <img id={this.props.imgId}
              src={this.props.images[this.props.currentIndex]['url']} >
            </img>

            <div id="af-image-next"
              onClick={() =>
                this.props.next(this.props.currentIndex)
              }>
        </div>

          </div>
          <ThumbnailCarousel images={this.props.images} select={this.props.select}/>
        </div>)
    }
    if (this.props.currentIndex === this.props.images.length - 1) {
      return (
      <div>
        <div id="af-image-container" style={this.props.width}>
        <div id="af-image-expand"
          onClick={this.props.click}></div>

        <div id="af-image-prev"
          onClick={() =>
            this.props.prev(this.props.currentIndex)
          }></div>

        <img id={this.props.imgId} src={this.props.images[this.props.currentIndex]['url']}>
        </img>
        </div>
        <ThumbnailCarousel images={this.props.images} select={this.props.select}/>
      </div>)
    }
    return (
      <div>
      <div id="af-image-container" style={this.props.width}>
        <div id="af-image-expand"
          onClick={this.props.click}
        ></div>

        <div id="af-image-prev"
          onClick={() =>
            this.props.prev(this.props.currentIndex)
          }></div>

        <img id={this.props.imgId} src={this.props.images[this.props.currentIndex]['url']}></img>

        <div id="af-image-next"
          onClick={() =>
            this.props.next(this.props.currentIndex)
          }></div>
      </div>
      <ThumbnailCarousel images={this.props.images} select={this.props.select}/>
      </div>)

  }
}

export default ImageGallery;