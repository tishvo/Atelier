import React from 'react';
import axios from 'axios';

import RelatedProducts from './subcomponents/RelatedProducts.jsx'
import YourOutfit from './subcomponents/YourOutfit.jsx'
//url for products
var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products'


class RelatedItemsAndComparison extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>
          <RelatedProducts />
          <YourOutfit />
        </div>
      </div>
    )
  }
}

export default RelatedItemsAndComparison;