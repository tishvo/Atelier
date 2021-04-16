import React from 'react';
import axios from 'axios';


class RPCard extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      backgroundImage: `url(${this.props.url})`,
      backgroundSize: '50%',
      backgroundPosition: 'center'
    };
  }

  render() {
    return (
      <div
        style={this.styles}>
        Preview Image
        Product Category
        Product Name
        Price
        <div>
          star rating
        </div>
      </div>
    )
  }
}

export default RPCard;