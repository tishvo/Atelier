import React from 'react';

class ProductInfoHead extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    if (this.props.salePrice) {
      return (<div>
        ***** Rating goes here <br />
        <h3>{this.props.name}</h3> <br />
        <h5>{this.props.slogan}</h5>
        <em id="af-strikethrough">${this.props.price}</em> <br />
        <em>${this.props.salePrice}</em> <br />
      Style: {this.props.styleName}
      </div>)
    } else {
      return (<div>
        ***** Rating goes here <br />
        <h3>{this.props.name}</h3> <br />
        <h5>{this.props.slogan}</h5>
        <em>${this.props.price}</em> <br />
        {this.props.styleName}
      </div>)

    }
  }
}

export default ProductInfoHead;