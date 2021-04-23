import React from 'react';
import axios from 'axios';

import ProductInfoHead from './ProductInfoHead.jsx'
import ProductInfoDescription from './ProductInfoDescription.jsx'
import ProductInfoShare from './ProductInfoShare.jsx'
import StyleSelector from './StyleSelector.jsx'
import ImageGallery from './ImageGallery.jsx'
import AddToCart from './AddToCart.jsx'
import SizeSelector from './SizeSelector.jsx'
import Characteristics from './Characteristics.jsx'


class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      averageStars: this.props.stars,
      stylesArray: null,
      images: null,
      reviewsArray: null,
      currentImageIndex: null,
      currentSelectedIndex: null,
      styleName: null,
      currentPrice: null,
      currentSalePrice: null,
      selectedStyle: null,
      expand_clicked: false,
      css_display: null,
      css_width: { width: '500px', height: '500px' },
      expand_clicked: false,
      display_right_side: true,
      imgElementId: "af-main-image",
      thumbnailCarouselBoxWidth: { width: '100px' },
      thumbnailCarouselBoxMiniHeight: { height: '0px' },
      featuresArray: null
    }

    this.changeDisplayImage = this.changeDisplayImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.expand = this.expand.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.shrink = this.shrink.bind(this);
  }

  componentDidMount() {
    // console.log('this is local storage??? ', localStorage)


    var itemId = this.props.currentItem['id'];

    axios.get(`/products/${itemId}`)
    .then((response) => {
      // console.log('here we will have the characteristics', response);

      this.setState ({
        featuresArray: response.data.features
      })
    })
    .catch ((error) => {
      console.log('error in getting specific product', error)
    })

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
          selectedStyle: 0,
          skusObject: response.data.results[0].skus,
          numberOfReviews: this.props.numberOfReviews,
          imgSize: 'default'

        })
      })
      .catch((error) => {
        console.log('error in OVERVIEW axios get request, error:', error)
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentItem['id'] !== prevProps.currentItem['id']) {
      this.componentDidMount()
      axios.get(`/reviews/meta/${this.props.currentItem['id']}`)
        .then((response) => {
          // console.log('response ratings', response.data.ratings);

          var rateObj = response.data.ratings;
          var result = 0;
          var numRating = 0;
          console.log('result: ', result);
          console.log('rateObj: ', this.state.ratingObj);
          for (var key in rateObj) {
            console.log('numKey');
            result = result + Number(key) * Number(rateObj[key]);
            numRating = numRating + Number(rateObj[key]);
          }
          // console.log('result: ', result);
          // console.log('numRating: ', numRating);
          var currRating = result / numRating;

          this.setState({
            averageStars: currRating
          })
          this.props.stars = currRating
          // console.log('state check of averageStars: ', this.state.averageStars)
        })

        .catch((error) => {
          console.log('error inside averageStar making: ', error)
        })
    }
    if (this.props.numberOfReviews !== prevProps.numberOfReviews) {
      this.setState({
        numberOfReviews: this.props.numberOfReviews
      })
    }
  }

  changeDisplayImage(index) {

    var styles = this.state.stylesArray;
    // console.log('this is styles[index] in changeDisplayImage: ', styles[index])
    this.setState({
      images: styles[index].photos,
      // currentImageIndex: 0,
      styleName: styles[index].name,
      currentPrice: styles[index].original_price,
      currentSalePrice: styles[index].sale_price,
      selectedStyle: index,
      skusObject: styles[index].skus
    })
  }

  selectImage(index) {
    this.setState({
      currentImage: this.state.images[index]['url'],
      currentImageIndex: index,
      currentSelectedIndex: index
    })

  }

  nextImage(index) {
    this.setState({
      currentImage: this.state.images[(index + 1)]['url'],
      currentImageIndex: (index + 1),
      currentSelectedIndex: (index + 1)
    })
  }

  prevImage(index) {
    this.setState({
      currentImage: this.state.images[(index - 1)]['url'],
      currentImageIndex: (index - 1),
      currentSelectedIndex: (index - 1)
    })
  }

  expand() {
    // console.log('expand clicked')
    if (this.state.expand_clicked) {
      if (this.state.imgSize === 'expanded') {

        this.setState({
          css_width: { width: '2400px', height: '1250px' },
          display_right_side: true,
          imgElementId: "af-main-image-xl",
          thumbnailCarouselBoxWidth: { width: '0px' },
          thumbnailCarouselBoxMiniHeight: { height: '0px' },
          imgSize: 'xl'
        })

      } else if (this.state.imgSize === 'xl') {
        this.setState({
          css_width: { width: '960px', height: '500px' },
          // expand_clicked: false,
          display_right_side: true,
          imgElementId: "af-main-image-expanded",
          thumbnailCarouselBoxWidth: { width: '0px' },
          thumbnailCarouselBoxMiniHeight: { height: '100px' },
          imgSize: 'expanded'
        })
      }

    } else {

      this.setState({
        css_width: { width: '960px', height: '500px' },
        expand_clicked: true,
        display_right_side: true,
        imgElementId: "af-main-image-expanded",
        thumbnailCarouselBoxWidth: { width: '00px' },
        thumbnailCarouselBoxMiniHeight: { height: '100px' },
        imgSize: 'expanded'

      })
    }
  }

  shrink() {
    // console.log('shrink clicked')
    if (this.state.imgSize === 'default') {
      this.setState({
        css_width: { width: '960px', height: '500px' },
        expand_clicked: true,
        imgSize: 'expanded',
        imgElementId: "af-main-image-expanded",
        thumbnailCarouselBoxWidth: { width: '0px' },
        thumbnailCarouselBoxMiniHeight: { height: '100px' },

      })
    } else {
      this.setState({
        css_width: { width: '500px', height: '500px' },
        expand_clicked: false,
        imgSize: 'default',
        imgElementId: "af-main-image",
        thumbnailCarouselBoxWidth: { width: '100px' },
        thumbnailCarouselBoxMiniHeight: { height: '0px' },
      })

    }
  }

  render() {

    if (this.state.stylesArray && this.state.featuresArray) {
      // if (this.state.display_right_side) {


      return (
        <div id="af-nameless">
          <div id="af-overview-container">

            <div id="af-landing-box">
              <ImageGallery
                shrink={this.shrink}
                thumbnailsWidth={this.state.thumbnailCarouselBoxWidth}
                thumbnailsMiniHeight={this.state.thumbnailCarouselBoxMiniHeight}
                imgId={this.state.imgElementId}
                width={this.state.css_width}
                click={this.expand}
                images={this.state.images}
                currentImage={this.state.currentImage}
                currentIndex={this.state.currentImageIndex}
                currentSelected={this.state.currentSelectedIndex}
                next={this.nextImage}
                prev={this.prevImage}
                select={this.selectImage}
              />

              <div id="af-right-side"
                styles={this.state.css_display}>
                <ProductInfoHead
                  numberOfReviews={this.state.numberOfReviews}
                  stars={this.state.averageStars}
                  name={this.props.currentItem.name}
                  styleName={this.state.styleName}
                  slogan={this.props.currentItem.slogan}
                  price={this.state.currentPrice}
                  salePrice={this.state.currentSalePrice}
                />

                <StyleSelector

                  styles={this.state.stylesArray}
                  click={this.changeDisplayImage}
                  selected={this.state.selectedStyle}
                /><br />
                <SizeSelector
                  skus={this.state.skusObject}
                  productName={this.props.currentItem.name}
                  styleName={this.state.styleName}
                />

                {/* <AddToCart /><br /> */}
                <ProductInfoShare />
              </div>
            </div><br />
          </div>
          <div id="af-product-description">
            <ProductInfoDescription description={this.props.currentItem.description} />
            <Characteristics features={this.state.featuresArray}/>
          </div>
        </div>)

    } else {
      return null;
    }
  }
}

export default Overview;

