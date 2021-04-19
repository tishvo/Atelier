import React from 'react';
import axios from 'axios';

import RelatedProducts from './subcomponents/RelatedProducts.jsx'
import YourOutfit from './subcomponents/YourOutfit.jsx'
//url for products


class RelatedItemsAndComparison extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidUpdate(prevProps) {
    if(this.props.currentItem !== prevProps.currentItem) { this.render(); }
  }

  render() {
    return (
      <div>
        <div>
          <RelatedProducts data={this.props.data} currentItem={this.props.currentItem} click={this.props.click}/>
          <YourOutfit />
        </div>
      </div>
    )
  }
}

export default RelatedItemsAndComparison;