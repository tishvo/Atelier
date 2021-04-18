import React from 'react';
import axios from 'axios';

import ProductInfoHead from './ProductInfoHead.jsx'
import ProductInfoDescription from './ProductInfoDescription.jsx'
import ProductInfoShare from './ProductInfoShare.jsx'
import StyleSelector from './StyleSelector.jsx'
import ImageGallery from './ImageGallery.jsx'
import AddToCart from './AddToCart.jsx'
import PAT from '../../../config.js';

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
        console.log('this is styles data for current product: ', response.data.results)
        this.setState({
          stylesArray: response.data.results,
          images: response.data.results[0].photos,
          currentImage: response.data.results[0].photos[0]['url'],
          currentImageIndex: 0,
          styleName: response.data.results[0].name,
          slogan: response.data.results[0].slogan

        })
      })
      .catch((error) => {
        console.log('error in OVERVIEW axios get request, error:', error)
      })
  }

  changeDisplayImage(index) {
    var styles = this.state.stylesArray;
    this.setState({
      images: styles[index].photos,
      // currentImageIndex: 0,
      styleName: styles[index].name
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
        <div id="af-overview-container">

          <div id="af-landing-box">
            <ImageGallery images={this.state.images} currentImage={this.state.currentImage} currentIndex={this.state.currentImageIndex} next={this.nextImage} prev={this.prevImage} />

            <div id="af-right-side">
              <ProductInfoHead name={this.props.currentItem.name} styleName={this.state.styleName} slogan={this.state.slogan}/><br />
              <StyleSelector styles={this.state.stylesArray} click={this.changeDisplayImage} /><br />
              <AddToCart /><br />
              <ProductInfoShare />
            </div>

          </div><br />

          <span id="af-product-description"><ProductInfoDescription description={this.props.currentItem.description} /></span>

        </div>)
    } else {
      return null;
    }
  }
}

export default Overview;