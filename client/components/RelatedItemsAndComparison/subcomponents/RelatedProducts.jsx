import React from 'react';
import axios from 'axios';

import RPCard from './RPCard.jsx';
import Arrow from './Arrow.jsx';
import PAT from '../../../../config.js'

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

  }

  componentDidMount() {
    console.log('props.data inside of Related Products: ', this.props.data)
    console.log('props.currentItem inside of Related Products: ', this.props.currentItem)
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
        {this.props.data.map( item =>
          <RPCard itemData={item} /> )}

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