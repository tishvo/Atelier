import React, { useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal/index.jsx';

class RPCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemData: {},
      allStyles: [],
      stylePreview: '',

      showModal: false,
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
    axios.get(`/products/${this.props.itemId}`)
    .then(res => {

      this._isMounted && this.setState({
        itemData: res.data
      })
    })
    .catch(err => {
      console.log('RP CARD DATA GET ERROR: ', err)
    })

    axios.get(`/products/${this.props.itemId}/styles`)
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
    if(this.props.itemId !== prevProps.itemId) { this.fetchData(); }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <div className='rr-column-container' style={this.styles}>
        <button  onClick={e => { this.showModal(); }} > &#9734; </button>
        <ComparisonModal close={e => { this.showModal(); }} show={this.state.showModal} comparisonData={this.state.itemData} mainData={ () => {
          return this.props.currentProduct } }/>
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

export default RPCard;