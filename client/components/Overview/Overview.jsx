import React from 'react';
import axios from 'axios';

import ProductInfoHead from './ProductInfoHead.jsx'
import ProductInfoDescription from './ProductInfoDescription.jsx'
import ProductInfoShare from './ProductInfoShare.jsx'
import StyleSelector from './StyleSelector.jsx'
import ImageGallery from './ImageGallery.jsx'
import AddToCart from './AddToCart.jsx'
import SizeSelector from './SizeSelector.jsx'


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
      css_width: { width: '500px' },
      expand_clicked: false,
      display_right_side: true,
      imgElementId: "af-main-image",
      thumbnailCarouselBoxWidth: { width: '100px' },
      thumbnailCarouselBoxMiniHeight: { height: '0px' }
    }

    this.changeDisplayImage = this.changeDisplayImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.expand = this.expand.bind(this);
    this.selectImage = this.selectImage.bind(this);
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
          selectedStyle: 0,
          skusObject: response.data.results[0].skus,
          numberOfReviews: this.props.numberOfReviews

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
          console.log('response ratings', response.data.ratings);

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
          console.log('result: ', result);
          console.log('numRating: ', numRating);
          var currRating = result / numRating;

          this.setState({
            averageStars: currRating
          })
          this.props.stars = currRating
          console.log('state check of averageStars: ', this.state.averageStars)
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
    console.log('expanding!')
    console.log(this.state.expand_clicked)


    if (this.state.expand_clicked) {

      this.setState({
        css_width: { width: '500px' },
        expand_clicked: false,
        display_right_side: true,
        imgElementId: "af-main-image",
        thumbnailCarouselBoxWidth: { width: '100px' },
        thumbnailCarouselBoxMiniHeight: { height: '0px' }
      })
    } else {

      this.setState({
        css_width: { width: '960px' },
        expand_clicked: true,
        display_right_side: true,
        imgElementId: "af-main-image-expanded",
        thumbnailCarouselBoxWidth: { width: '00px' },
        thumbnailCarouselBoxMiniHeight: { height: '100px' }

      })
    }
  }

  render() {

    if (this.state.stylesArray) {
      // if (this.state.display_right_side) {


      return (
        <div id="af-nameless">
          <div id="af-overview-container">

            <div id="af-landing-box">
              <ImageGallery
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
                /><br />

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
          </div>
        </div>)
      // } else {

      // return (
      //   <div id="af-overview-container">

      //     <div id="af-landing-box">
      //       <ImageGallery
      //         width={this.state.css_width}
      //         click={this.expand}
      //         images={this.state.images}
      //         currentImage={this.state.currentImage}
      //         currentIndex={this.state.currentImageIndex}
      //         next={this.nextImage}
      //         prev={this.prevImage}
      //       />
      //     </div>

      //     <span id="af-product-description">
      //       <ProductInfoDescription description={this.props.currentItem.description} />
      //     </span>

      //   </div>)

      // }
    } else {
      return null;
    }
  }
}

export default Overview;

