import React, { useEffect } from 'react';
import { BiStar } from 'react-icons/bi';
import axios from 'axios';
import ComparisonModal from './ComparisonModal/index.jsx';

class RPCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemData: {},
      allStyles: [],
      stylePreview: '',
      averageStars: undefined,
      showModal: false,
    }

    this.styles = {
      'margins': 'center',
      'borderStyle': 'solid',
      'width': '30%',
      'height': '300px'
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.renderStars = this.renderStars.bind(this);

    this._isMounted = false;
  }

  fetchData() {
    // get product info
    axios.get(`/products/${this.props.itemId}`)
    .then(res => {

      this._isMounted && this.setState({
        itemData: res.data
      })
    })
    .catch(err => {
      console.log('RP CARD DATA GET ERROR: ', err)
    })
    // get images
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
    // get review stars
    axios.get(`/reviews/meta/${this.props.itemId}`)
    .then((response) => {
      var rateObj = response.data.ratings;
      var result = 0;
      var numRating = 0;
      for (var key in rateObj) {
        result = result + Number(key) * Number(rateObj[key]);
        numRating = numRating + Number(rateObj[key]);
      }
      var currRating;
      if (numRating === 0) {
        currRating = 'Not yet rated';
      } else {
        currRating = (result / numRating);
      }
      this.setState({
        averageStars: currRating
      })
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

  renderStars() {
    var numArray = [];
    var newNum = this.state.averageStars;
    for (var i = 1; i < this.state.averageStars; i++) {
      numArray.push(1);
      newNum--;
    }
    numArray.push(newNum);
    if (numArray[0] === "Not yet rated") {
      return (
        <span>
          {numArray[0]}
        </span>
      );
    } else {
      return (
        <span id="af=stars">
          {numArray.map((num, index) => {
            if (num === 1 || num > 0.872) {
              return <div id="af-full-star" key={index}>1</div>
            } else if (num >= 0.63 && num <= 0.872) {
              return <div id="af-three-quarter-star" key={index}>0.75</div>
            } else if (num > 0.38 && num <= 0.62) {
              return <div id="af-half-star" key={index}>0.5</div>
            } else if (num >= 0.12 && num <= 0.38) {
              return <div id="af-quarter-star" key={index}>0.25</div>
            }
          })
          }
        </span>
      );
    }
  }

  render() {
    return (
      <div className='rr-column-container' style={this.styles}>
        <div className='rr-action-button' onClick={e => { this.showModal(); }} >
          < BiStar size={20}/>
        </div>
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

        { this.renderStars() }
      </div>
    )
  }
}

export default RPCard;