import React from 'react';
import StyleSelector from './StyleSelector.jsx'
import ThumbnailCarousel from './ThumbnailCarousel.jsx'

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      widthStyle: { width: '400px' },
      expand_clicked: false,
      display: 'true'
    }


  }

  render() {

    if (this.props.currentIndex === 0) {
      return (<div id="af-image-container" style={this.props.width}>

        <ThumbnailCarousel />

        <button id="af-image-expand"
          onClick={this.props.click}>
          exp
        </button>

        <img id="af-main-image"
          src={this.props.images[this.props.currentIndex]['url']} >
        </img>

        <button id="af-image-next"
          onClick={() =>
            this.props.next(this.props.currentIndex)
          }>
          NEXT
        </button>

      </div>)
    }
    if (this.props.currentIndex === this.props.images.length - 1) {
      return (<div id="af-image-container" style={this.props.width}>
        <button id="af-image-expand"
          onClick={this.props.click}>
          exp
        </button>

        <button id="af-image-prev"
          onClick={() =>
            this.props.prev(this.props.currentIndex)
          }>
          PREV
        </button>

        <img id="af-main-image" src={this.props.images[this.props.currentIndex]['url']}>
        </img>
      </div>)
    }
    return (
      <div id="af-image-container" style={this.props.width}>
        <button id="af-image-expand"
          onClick={this.props.click}
        >exp
        </button>

        <button id="af-image-prev"
          onClick={() =>
            this.props.prev(this.props.currentIndex)
          }>PREV
        </button>

        <img id="af-main-image" src={this.props.images[this.props.currentIndex]['url']}></img>

        <button id="af-image-next"
          onClick={() =>
            this.props.next(this.props.currentIndex)
          }>NEXT
        </button>
      </div>)

  }
}

export default ImageGallery;