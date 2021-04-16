import React from 'react';
import axios from 'axios';

import RPCard from './RPCard.jsx';
import Arrow from './Arrow.jsx';
import PAT from '../../../../config.js'

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      relatedProducts: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

  }

  componentDidMount() {
    // console.log('data found in RelatedProducts:', this.props.data)
    // console.log('currentItem in RelatedProducts', this.props.currentItem)
    // console.log('currentItem ID in RelatedProducts', this.props.currentItem['id'])
    var itemId = this.props.currentItem['id'];
    // url where current item's related products are located
    let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${itemId}/related`;

    // get those items
    axios.get(url, {
      headers: {
        'Authorization': `${PAT}`
      }
    })
      .then(res => {
        console.log('related items array in RelatedProducts: ', res.data)
        console.log('first item in RelatedProducts array: ', res.data[0])
        this.setState({
          relatedProducts: res.data
        }, () => {
          // console.log(this.state);

        })
      })
      .catch(err => {
        console.log('/RELATED GET ERROR: ', err)
      })

  }
  // Arrow Functionality
  previousSlide () {
    console.log('clicked previous slide');
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }
  // Arrow Functionality
  nextSlide () {
    console.log('clicked next slide');
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div>
        <div>Related Products Carousel (auto-generated)</div>

        <div>
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />

        {console.log('data found in RP Carousel Component', this.props.data)}
        {this.state.relatedProducts.map( relatedItem =>
          <RPCard itemId={relatedItem} /> )}

        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
        </div>

      </div>

    )
  }
}

export default RelatedProducts;