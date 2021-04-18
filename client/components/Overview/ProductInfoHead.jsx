import React from 'react';

class ProductInfoHead extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<div>
      ***** Rating goes here <br />
      <h3>{this.props.name}</h3> <br/>
      <h5>{this.props.slogan}</h5>
      {this.props.styleName}
    </div>)
  }
}

export default ProductInfoHead;