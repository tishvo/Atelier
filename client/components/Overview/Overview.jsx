import React from 'react';
import axios from 'axios';

import ProductInfoHead from './ProductInfoHead.jsx'
import ProductInfoDescription from './ProductInfoDescription.jsx'
import ProductInfoShare from './ProductInfoShare.jsx'
import StyleSelector from './StyleSelector.jsx'
import ImageGallery from './ImageGallery.jsx'
import AddToCart from './AddToCart.jsx'

// RANDOM FASHION PHOTO GENERATOR: https://source.unsplash.com/1600x900/?fashion

class Overview extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <div id="front-page">
          <div id="image-gallery">
            <ImageGallery />
          </div>
          <div id="right-side">
            <ProductInfoHead name={this.props.currentItem.name}/><br />
            <StyleSelector /><br />
            <AddToCart /><br />
            <ProductInfoShare />
          </div>
        </div>
        <span id="product-description"><ProductInfoDescription description={this.props.currentItem.description} /></span>

      </div>)

  }
}

export default Overview;