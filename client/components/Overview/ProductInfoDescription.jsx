import React from 'react';

class ProductInfoDescription extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<div>{this.props.description}</div>)
  }
}

export default ProductInfoDescription;