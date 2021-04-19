import React from 'react';
import axios from 'axios';

class RPCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemData: {},
      allStyles: [],
      stylePreview: ''
    }

    this.styles = {
      'margins': 'center',
      'borderStyle': 'solid',
      'width': '30%'
    };
  }
  componentDidMount() {
    axios.get(`/products/${this.props.itemId}`)
    .then(res => {
      // console.log('got data for RP Card: ', res.data)
      this.setState({
        itemData: res.data
      })
    })
    .catch(err => {
      console.log('RP CARD DATA GET ERROR: ', err)
    })

    axios.get(`/products/${this.props.itemId}/styles`)
    .then(res => {

      console.log('RPCARD first item in styles', res.data.results[0])

      this.setState({
        allStyles: res.data.results,
        stylePreview: res.data.results[0].photos[0]['thumbnail_url']
      })


    })
    .catch((error) => {
      console.log('error in RPCARD /styles request, error:', error)
    })
  }
  render() {
    return (
      <div className='rr-column-container' style={this.styles}>
        <span>
          {this.state.itemData.name}
        </span>
        <span>
          {this.state.itemData.category}
        </span>
        <span>
          {this.state.itemData.default_price}
        </span>
        <img className='rr-thumbnail' src={this.state.stylePreview} alt={'image: ' + `${this.state.itemData.name}`}></img>
        <div>
          star rating
        </div>
      </div>
    )
  }
}

export default RPCard;