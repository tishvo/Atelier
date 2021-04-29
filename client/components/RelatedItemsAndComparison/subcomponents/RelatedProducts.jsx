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
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.componentRef = React.createRef();
  }

  fetchData(itemId) {
    // get those items
    axios.get(`/products/${itemId}/related`)
      .then(res => {

        this.setState({
          allRelated: res.data,
          currentProduct: this.props.currentItem
        })
      })
      .catch(err => {
        console.log('/RELATED GET ERROR: ', err)
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentItem !== prevProps.currentItem) {
      this.fetchData(this.props.currentItem.id);
    }
  }

  componentDidMount() {
    var itemId = this.props.currentItem.id;
    if (itemId) {
      this.fetchData(itemId);
    }
  }

  // Arrow Functionality
  previousSlide () {
    if (this.componentRef.current) {
      // console.log('clicked previous slide');
      this.componentRef.current.scrollBy({
        left: -260,
        behavior: 'smooth'
      })
    }
  }
  // Arrow Functionality
  nextSlide () {
    if (this.componentRef.current) {
      // console.log('clicked next slide');
      this.componentRef.current.scrollBy({
        left: 260,
        behavior: 'smooth'
      })
    }
  }

  renderList () {
    return (
      <div className='slide-container'>

        <div
          className="rr-carousel-arrow">
          <Arrow
            direction="left"
            clickFunction={ () => { this.previousSlide() } }
          />
        </div>

        { <div className='items-container' ref={this.componentRef}>
            {this.state.allRelated.map((relatedItem, index) => {
              return (
              <div key={index} className='single-item-container'>
                <RPCard
                  itemId={relatedItem}
                  click={this.props.click}
                  currentProduct={this.state.currentProduct}
                />
              </div>
              )
            })}
          </div>
        }

        <div
          className="rr-carousel-arrow">
          <Arrow
            direction="right"
            clickFunction={ () => { this.nextSlide() } }
          />
        </div>

      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Related Products</h2>
        <div>

          { this.renderList() }

        </div>
      </div>
    )
  }
}

export default RelatedProducts;