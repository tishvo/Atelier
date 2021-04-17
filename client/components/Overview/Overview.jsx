import React from 'react';
import axios from 'axios';

import ProductInfoHead from './ProductInfoHead.jsx'
import ProductInfoDescription from './ProductInfoDescription.jsx'
import ProductInfoShare from './ProductInfoShare.jsx'
import StyleSelector from './StyleSelector.jsx'
import ImageGallery from './ImageGallery.jsx'
import AddToCart from './AddToCart.jsx'
import PAT from '../../../config.js';

// RANDOM FASHION PHOTO GENERATOR: https://source.unsplash.com/1600x900/?fashion

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stylesArray: null,
      images: null,
      currentImageIndex: null
    }

    this.changeDisplayImage = this.changeDisplayImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  componentDidMount() {
    var itemId = this.props.currentItem['id'];
    axios.get(`/products/${itemId}/styles`)
      .then((response) => {
        this.setState({
          stylesArray: response.data.results,
          images: response.data.results[0].photos,
          currentImage: response.data.results[0].photos[0]['url'],
          currentImageIndex: 0
        })
      })
      .catch((error) => {
        console.log('error in OVERVIEW axios get request, error:', error)
      })
  }

  changeDisplayImage(index) {
    var styles = this.state.stylesArray
    this.setState({
      images: styles[index].photos,
      currentImageIndex: 0
    })
  }

  nextImage(index) {
    this.setState({
      currentImage: this.state.images[(index + 1)]['url'],
      currentImageIndex: (index + 1)
    })
  }

  prevImage(index) {
    this.setState({
      currentImage: this.state.images[(index - 1)]['url'],
      currentImageIndex: (index - 1)
    })
  }


  render() {

    if (this.state.stylesArray) {

      return (
        <div>
          <div id="front-page">
            <div id="image-gallery">
              <ImageGallery images={this.state.images} currentImage={this.state.currentImage} currentIndex={this.state.currentImageIndex} next={this.nextImage} prev={this.prevImage}/>
            </div>
            <div id="right-side">
              <ProductInfoHead name={this.props.currentItem.name} /><br />
              <StyleSelector styles={this.state.stylesArray} click={this.changeDisplayImage} /><br />
              <AddToCart /><br />
              <ProductInfoShare />
            </div>
          </div>
          <span id="product-description"><ProductInfoDescription description={this.props.currentItem.description} /></span>

        </div>)
    } else {
      return null
    }

  }
}

export default Overview;