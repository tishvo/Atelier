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
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidMount() {
    axios.get(`/products/${this.props.itemId}`)
    .then(res => {

      this.setState({
        itemData: res.data
      })
    })
    .catch(err => {
      console.log('RP CARD DATA GET ERROR: ', err)
    })

    axios.get(`/products/${this.props.itemId}/styles`)
    .then(res => {

      this.setState({
        allStyles: res.data.results,
        stylePreview: res.data.results[0].photos[0]['thumbnail_url']
      })

    })
    .catch((error) => {
      console.log('error in RPCARD /styles request, error:', error)
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) { this.componentDidMount(); }
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