import React from 'react';
import axios from 'axios';

import RPCard from './RPCard.jsx'

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>Related Products Carousel (auto-generated)</div>
        <RPCard />
      </div>
    )
  }
}

export default RelatedProducts;