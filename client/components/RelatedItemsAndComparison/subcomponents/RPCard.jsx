import React from 'react';
import axios from 'axios';
import PAT from '../../../../config.js';

class RPCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemData: {}
    }

    this.styles = {
      backgroundImage: `url(${this.props.url})`,
      backgroundSize: '50%',
      backgroundPosition: 'center'
    };
  }
  componentDidMount() {
    axios.get(`/products/${this.props.itemId}`)
    .then(res => {
      console.log('got data for RP Card: ', res.data)
      this.setState({
        itemData: res.data
      })
    })
    .catch(err => {
      console.log('RP CARD DATA GET ERROR: ', err)
    })
  }
  render() {
    return (
      <div style={this.styles}>
        Preview Image
        <span>
          Category: {this.state.itemData.category}
        </span>
        <span>
          {this.state.itemData.name}
        </span>
        <span>
          {this.state.itemData.default_price}
        </span>
        <div>
          star rating
        </div>
      </div>
    )
  }
}

export default RPCard;