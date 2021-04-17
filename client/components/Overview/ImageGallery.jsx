import React from 'react';


class ImageGallery extends React.Component {
  constructor(props) {
    super(props)

  }




  render() {

    if (this.props.currentIndex === 0) {
      return (<div id="af-image-container">
        <button id="af-image-expand">exp</button>
        <img id="af-main-image" src={this.props.images[this.props.currentIndex]['url']}></img>
        <button id="af-image-next"
          onClick={() =>
            this.props.next(this.props.currentIndex)
          }>NEXT</button>
      </div>)
    }
    if (this.props.currentIndex === this.props.images.length - 1) {
      return (<div id="af-image-container">
        <button id="af-image-expand">exp</button>
        <button id="af-image-prev"
          onClick={() =>
            this.props.prev(this.props.currentIndex)
          }>PREV</button>
        <img id="af-main-image" src={this.props.images[this.props.currentIndex]['url']}></img>
      </div>)
    }
    return (<div id="af-image-container">
      <button id="af-image-expand">exp</button>
      <button id="af-image-prev"
        onClick={() =>
          this.props.prev(this.props.currentIndex)
        }>PREV</button>
      <img id="af-main-image" src={this.props.images[this.props.currentIndex]['url']}></img>
      <button id="af-image-next"
        onClick={() =>
          this.props.next(this.props.currentIndex)
        }>NEXT</button>
    </div>)

  }
}

export default ImageGallery;