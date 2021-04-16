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
      imageGalleryDisplay: null
    }

    this.changeDisplayImage = this.changeDisplayImage.bind(this);
  }

  componentDidMount() {
    // console.log('data found in Overview.jsx:', this.props.data)
    // console.log('currentItem found in Overview.jsx:', this.props.currentItem)
    // console.log('currentItem ID found in Overview.jsx:', this.props.currentItem['id'])
    var itemId = this.props.currentItem['id'];
    let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${itemId}/styles`;

    axios.get(url, {
      headers: {
        'Authorization': `${PAT}`
      }
    })
      .then((response) => {
        console.log('got our styles array for current product! response: ', response.data.results)
        console.log('first item in styles', response.data.results[0])

        this.setState({
          stylesArray: response.data.results,
          imageGalleryDisplay: response.data.results[0].photos[0]['url']
        })


      })
      .catch((error) => {
        console.log('error in Overview axios get request, error:', error)
      })

  }

  changeDisplayImage(index) {
    //console.log('this is stylesArray: ', this)
    var styles = this.state.stylesArray
    this.setState({
      imageGalleryDisplay: styles[index].photos[0]['url']
    })

  }


  render() {

    if (this.state.stylesArray) {

      return (
        <div>
          <div id="front-page">
            <div id="image-gallery">
              <ImageGallery images={this.state.imageGalleryDisplay} />
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