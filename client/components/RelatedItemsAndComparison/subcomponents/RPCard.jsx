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
      'width': '200px',
      'height': '300px'
    };


    this.fetchData = this.fetchData.bind(this);
    this.renderStars = this.renderStars.bind(this);

  }

  fetchData() {
    // get product info
    axios.get(`/products/${this.props.itemId}`)
    .then(res => {

      this.setState({
        itemData: res.data
      })
    })
    .catch(err => {
      console.log('RP CARD DATA GET ERROR: ', err)
    })
    // get images
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
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) { this.fetchData(); }
  }

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  renderStars() {
    if (this.state.averageStars === "Not yet rated") {
      return (
        <span>
          {this.state.averageStars}
        </span>
      );
    } else {
      var numArray = [];
      var newNum = this.state.averageStars;
      for (var i = 1; i <= 5; i++) {
        if (newNum >= 1) {
          numArray.push(1);
        } else if (newNum < 1 && newNum > 0) {
          numArray.push(newNum);
        } else {
          numArray.push(0);
        }
        newNum--;
      }
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
            } else {
              return <div id="af-empty-star" key={index}>0</div>
            }
          })
          }
        </span>
      );
    }
  }
  // will render sale price if first display style is on sale
  renderPrice() {
    if (this.state.allStyles.length > 0) {
      if (this.state.allStyles[0].sale_price !== null) {
        return (
          <div>
            <span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
              ${this.state.itemData.default_price}
            </span>
            <span style={{color: 'red'}}>
              SALE: ${this.state.allStyles[0].sale_price}
            </span>
          </div>
)
      } else {
        return (
          <div>
            <span >
              ${this.state.itemData.default_price}
            </span>
          </div>
        )
      }
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

        { this.renderPrice() }

        { this.renderStars() }

      </div>
    )
  }
}

export default RPCard;