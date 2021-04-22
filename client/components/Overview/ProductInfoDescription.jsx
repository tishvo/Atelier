import React from 'react';

class ProductInfoDescription extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<div id="af-product-info-description">{this.props.description}</div>)
  }
}

export default ProductInfoDescription;