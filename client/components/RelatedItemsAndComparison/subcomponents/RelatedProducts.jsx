import React from 'react';
import axios from 'axios';

import RPCard from './RPCard.jsx';
import Arrow from './Arrow.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProduct: {},

      allRelated: [],
      visibleRelated: [],
      firstCard: 0,
      lastCard: 2
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

  }

  componentDidMount() {
    console.log('current item in RP: ', this.props.currentItem)
    var itemId = this.props.currentItem['id'];
    // get those items
    axios.get(`/products/${itemId}/related`)
      .then(res => {
        // console.log('related items array in RelatedProducts: ', res.data)
        // console.log('first item in RelatedProducts array: ', res.data[0])
        this.setState({
          allRelated: res.data,
          currentProduct: this.props.currentItem
        }, () => {
          // console.log(this.state);
          this.setState({
            visibleRelated: this.state.allRelated.slice(this.state.firstCard, this.state.lastCard)
          })
        })
      })
      .catch(err => {
        console.log('/RELATED GET ERROR: ', err)
      })

  }
  // Arrow Functionality
  previousSlide () {
    console.log('clicked previous slide');
    const lastIndex = this.state.allRelated.length - 1;
    if (this.state.firstCard > 0) {
      this.setState({
        firstCard: this.state.firstCard -1,
        lastCard: this.state.lastCard -1,
        visibleRelated: this.state.allRelated.slice(this.state.firstCard, this.state.lastCard)
      }, () => {
        console.log(this.state.firstCard);
        this.setState({
          visibleRelated: this.state.allRelated.slice(this.state.firstCard, this.state.lastCard)
        });
      });
    }
  }
  // Arrow Functionality
  nextSlide () {
    console.log('clicked next slide');
    const lastIndex = this.state.allRelated.length - 1;
    if (this.state.lastCard <= lastIndex) {
      this.setState({
        firstCard: this.state.firstCard +1,
        lastCard: this.state.lastCard +1,
      }, () => {
        console.log(this.state.firstCard);
        console.log(this.state.visibleRelated);
        this.setState({
          visibleRelated: this.state.allRelated.slice(this.state.firstCard, this.state.lastCard)
        });
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Related Products: </h2>
        <div className='rr-row-container' >
          <Arrow
            direction="left"
            clickFunction={ this.previousSlide }
            glyph="&#9664;" />

          {this.state.visibleRelated.map( (relatedItem, index) =>
            <RPCard itemId={relatedItem} key={index}/> )}

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