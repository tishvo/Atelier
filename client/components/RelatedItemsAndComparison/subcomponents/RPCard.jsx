import React from 'react';
import axios from 'axios';



class RPCard extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      backgroundImage: `url(${this.props.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  }



  render() {
    return (
      <div
        style={this.styles}>
        { console.log(this.styles) }
      </div>
    )
  }
}

export default RPCard;