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

      showModal: false
    }

    this.styles = {
      'margins': 'center',
      'borderStyle': 'solid',
      'width': '30%'
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.useEffect = this.useEffect.bind(this);
  }
  useEffect() {
    let isMounted = true; // note this mounted flag
    componentDidMount();
    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }

  componentDidMount() {
    let isMounted = true;
    axios.get(`/products/${this.props.itemId}`)
    .then(res => {

      if (isMounted) {
        this.setState({
          itemData: res.data
        })
      }

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

    let isMounted = true;

    if(this.props.itemId !== prevProps.itemId) { this.componentDidMount(); }

    return () => {
      isMounted = false
    }
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
        <ComparisonModal close={e => { this.showModal(); }} show={this.state.showModal} />
        <span>
          {this.state.itemData.name}
        </span>
        <span>
          {this.state.itemData.category}
        </span>
        <span>
          {this.state.itemData.default_price}
        </span>
        <img className='rr-thumbnail' src={this.state.stylePreview} alt={'image: ' + `${this.state.itemData.name}`} onClick={ () => {
        return this.props.click(this.state.itemData) } }></img>
        <div>
          star rating
        </div>
      </div>
    )
  }
}

export default RPCard;