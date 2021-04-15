import React from 'react';

class ProductInfoHead extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<div>
      Rating goes here <br />
      {this.props.name}
      etc.
    </div>)
  }
}

export default ProductInfoHead;