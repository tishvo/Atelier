import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import styles from '../../../public/styles.css'

class ImageGallery extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   // imageArray: this.props.images, // just called this.props.images
    //   // currentImage: this.props.images[0]['url'], //  called this.props.currentImage
    //   // currentIndex: 0 // just called this.props.currentIndex
    // }
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


    // return (
    //   <Carousel id="af-carousel" showArrows={true} centerMode={true}>
    //     {this.props.images.map((image, index) =>

    //       <div key={index}>
    //         <img key={index} id="af-main-image" src={this.props.images[index]['url']} />
    //       </div>
    //     )
    //   }
    // </Carousel>
    // )
  }
}

export default ImageGallery;