import React from 'react';
import axios from 'axios';

class YOCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemData: {},
      allStyles: [],
      stylePreview: '',
    }

    this.styles = {
      'margins': 'center',
      'borderStyle': 'solid',
      'width': '30%'
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    axios.get(`/products/${this.props.item.id}`)
    .then(res => {

      this.setState({
        itemData: res.data
      })
    })
    .catch(err => {
      console.log('RP CARD DATA GET ERROR: ', err)
    })

    axios.get(`/products/${this.props.item.id}/styles`)
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

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.item.id !== prevProps.item.id) { this.fetchData(); }
  }

  render() {

    return (
      <div className='rr-column-container' style={this.styles}>
        <button  onClick={e => { this.props.remove(this.state.itemData.id); }} > &#10006; </button>
        <img className='rr-thumbnail' src={this.state.stylePreview} alt={'image: ' + `${this.state.itemData.name}`} onClick={ () => {
        return this.props.click(this.state.itemData) } }></img>
        <span>
          {this.state.itemData.category}
        </span>
        <h4 onClick={ () => {
        return this.props.click(this.state.itemData) } }>
          {this.state.itemData.name}
        </h4>
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

export default YOCard;