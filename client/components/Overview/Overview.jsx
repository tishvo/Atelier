import React from 'react';
import axios from 'axios';

import ProductInfoHead from './ProductInfoHead.jsx'
import ProductInfoDescription from './ProductInfoDescription.jsx'
import ProductInfoShare from './ProductInfoShare.jsx'
import StyleSelector from './StyleSelector.jsx'
import ImageGallery from './ImageGallery.jsx'
import AddToCart from './AddToCart.jsx'


class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stylesArray: null,
      images: null,
      reviewsArray: null,
      currentImageIndex: null,
      styleName: null,
      currentPrice: null,
      currentSalePrice: null,
      selectedStyle: null,
      expand_clicked: false,
      css_display: null,
      css_width: { width: '400px' },
      expand_clicked: false,
      display_right_side: true
    }

    this.changeDisplayImage = this.changeDisplayImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.expand = this.expand.bind(this);
  }

  componentDidMount() {

    var itemId = this.props.currentItem['id'];

    // get the styles by id
    axios.get(`/products/${itemId}/styles`)
      .then((response) => {
        console.log('this is the styles data: ', response.data.results)

        this.setState({
          stylesArray: response.data.results,
          images: response.data.results[0].photos,
          currentImage: response.data.results[0].photos[0]['url'],
          currentImageIndex: 0,
          styleName: response.data.results[0].name,
          currentPrice: response.data.results[0].original_price,
          currentSalePrice: response.data.results[0].sale_price,
          selectedStyle: 0
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
      styleName: styles[index].name,
      currentPrice: styles[index].original_price,
      currentSalePrice: styles[index].sale_price,
      selectedStyle: index
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

  expand() {
    console.log('expanding!')
    console.log(this.state.expand_clicked)

    if (this.state.expand_clicked) {

      this.setState({
        css_width: { width: '400px' },
        expand_clicked: false,
        display_right_side: true
      })
    } else {

      this.setState({
        css_width: { width: '1200px' },
        expand_clicked: true,
        display_right_side: false
      })
    }
  }

  render() {

    if (this.state.stylesArray) {
      if (this.state.display_right_side) {

        return (
          <div id="af-overview-container">

            <div id="af-landing-box">
              <ImageGallery
                width={this.state.css_width}
                click={this.expand}
                images={this.state.images}
                currentImage={this.state.currentImage}
                currentIndex={this.state.currentImageIndex}
                next={this.nextImage}
                prev={this.prevImage}
              />

              <div id="af-right-side"
                styles={this.state.css_display}>
                <ProductInfoHead
                  stars={this.props.stars}
                  name={this.props.currentItem.name}
                  styleName={this.state.styleName}
                  slogan={this.props.currentItem.slogan}
                  price={this.state.currentPrice}
                  salePrice={this.state.currentSalePrice}
                /><br />

                <StyleSelector
                  styles={this.state.stylesArray}
                  click={this.changeDisplayImage}
                  selected={this.state.selectedStyle}
                /><br />

                <AddToCart /><br />
                <ProductInfoShare />
              </div>

            </div><br />

            <span id="af-product-description"><ProductInfoDescription description={this.props.currentItem.description} /></span>

          </div>)
      } else {

        return (
          <div id="af-overview-container">

            <div id="af-landing-box">
              <ImageGallery
                width={this.state.css_width}
                click={this.expand}
                images={this.state.images}
                currentImage={this.state.currentImage}
                currentIndex={this.state.currentImageIndex}
                next={this.nextImage}
                prev={this.prevImage}
              />
            </div>

            <span id="af-product-description"><ProductInfoDescription description={this.props.currentItem.description} /></span>

          </div>)

      }
    } else {
      return null;
    }
  }
}

export default Overview;

