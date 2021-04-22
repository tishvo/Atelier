import React from 'react';
import { TiDelete } from 'react-icons/ti';
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

    this._isMounted = false;
  }

  fetchData() {
    axios.get(`/products/${this.props.item.id}`)
    .then(res => {

      this._isMounted && this.setState({
        itemData: res.data
      })
    })
    .catch(err => {
      console.log('RP CARD DATA GET ERROR: ', err)
    })

    axios.get(`/products/${this.props.item.id}/styles`)
    .then(res => {
        this._isMounted && this.setState({
          allStyles: res.data.results,
          stylePreview: res.data.results[0].photos[0]['thumbnail_url']
        })
    })
    .catch((error) => {
      console.log('error in RPCARD /styles request, error:', error)
    })
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.item.id !== prevProps.item.id) { this.fetchData(); }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    return (
      <div className='rr-column-container' style={this.styles}>
        <div className='rr-action-button' onClick={e => { this.props.remove(this.state.itemData.id); }} > < TiDelete size={30}/> </div>
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