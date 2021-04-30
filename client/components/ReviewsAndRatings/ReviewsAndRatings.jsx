import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdownMain from './ProductBreakdownMain.jsx';
import PrivacyHOC from '../ClickTrackingHOC.js';
import WriteReview from './WriteReview.jsx';




class ReviewsAndRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      reviewData: [],
      numberOfReviews: 0,
      averageStars: '',
      rateObj: {},
      metaData: null,
      sort: 'relevant'

    };
    this.getReviewsForItem = this.getReviewsForItem.bind(this);
    this.getReviewsForReviewMeta = this.getReviewsForReviewMeta.bind(this);
    this.getSortOption = this.getSortOption.bind(this);
    this.getHelpfulReviewsForItem = this.getHelpfulReviewsForItem.bind(this);
    this.getNewestReviewsForItem = this.getNewestReviewsForItem.bind(this);
    this.handleWriteReviewClick = this.handleWriteReviewClick.bind(this);
    this.PrivacyHOC = PrivacyHOC.bind(this);
  }

  componentDidMount() {
    //GET request for Reviews
    this.getReviewsForItem();

    //GET request for Rating Meta data
    this.getReviewsForReviewMeta();

  }

  componentDidUpdate(prevProps) {
    //console.log('whed does this go off')
    if (this.props.itemId !== prevProps.itemId) {
      //GET request for Reviews
      this.getReviewsForItem();
      //GET request for Rating Meta data

    }
    if (this.state.sort === 'helpful' && this.state.getRequest === false) {
        this.getHelpfulReviewsForItem();
        this.setState({getRequest: true});

    }
    if (this.state.sort === 'newest' && this.state.getRequest === false) {
      this.getNewestReviewsForItem();
      this.setState({getRequest: true})
    }
  }


  getNewestReviewsForItem() {
    axios.get(`/reviews/${this.props.itemId}&count=1000&sort=newest`)
      .then((response) => {
        //console.log('this is review data changing: ', this.state.reviewData)
        this.setState({
          numberOfReviews: response.data.results.length,
          reviewData: response.data.results
        });
      })
      .catch((error) => {
        console.log('error getting our response from reviews get: ', error)
      })
  }

  //get for sorted by helpful
  getHelpfulReviewsForItem() {
    axios.get(`/reviews/${this.props.itemId}&count=1000&sort=helpful`)
      .then((response) => {
        //console.log('this is review data changing: ', this.state.reviewData)

        this.setState({
          numberOfReviews: response.data.results.length,
          reviewData: response.data.results

        });
      })
      .catch((error) => {
        console.log('error getting our response from reviews get: ', error)
      })
  }

  getReviewsForItem() {
    axios.get(`/reviews/${this.props.itemId}&count=1000&sort=${this.state.sort}`)
      .then((response) => {

        this.setState({
          numberOfReviews: response.data.results.length,
          reviewData: response.data.results
        }, this.getReviewsForReviewMeta());
      })
      .catch((error) => {
        console.log('error getting our response from reviews get: ', error)
      })
  }

  getReviewsForReviewMeta() {
    axios.get(`/reviews/meta/${this.props.itemId}`)
      .then((response) => {
        //console.log('response chars: ', response.data.characteristics)
        this.setState({
          rateObj: response.data.ratings,
          metaData: response.data,
          charData: response.data.characteristics
        })
        //get star rating average
        var rateObj = response.data.ratings;
        var result = 0;
        var numRating = 0;

        for (var key in rateObj) {
          result = result + (Number(key) * Number(rateObj[key]));
          numRating = numRating + Number(rateObj[key]);
        }
        var currRating = result / numRating;
        this.setState({
          averageStars: currRating
        });
      })
      .catch((error) => {
        console.log('error inside reviews meta get: ', error)
      })
  }

  //function to be sent down as props to get the value of the chosen sort option
  getSortOption(event) {
    //console.log('this is the thing handler', event.target.value);
    this.setState({
      sort: event.target.value,
      getRequest: false
    })
  }

  //will show/hide the review submission form
  handleWriteReviewClick(event) {
    event.preventDefault();
    this.setState({
      showAdd: !this.state.showAdd
    });
  }


  render() {

    if (this.state.averageStars) {
      //console.log('metadata: ', this.state.charData)
      return (
        <div id="mm-ratingsandreviews-overview">
          <div id="mm-ratingsandreviews-reviewlist">
            <h2>Reviews and Ratings</h2>
            <ReviewsList stars={this.state.averageStars} itemId={this.props.itemId} reviewData={this.state.reviewData}
            numReviews={this.state.numberOfReviews} sendSort={this.getSortOption} charData={this.state.charData}/>
          </div>
          <div id="mm-ratingsandreviews-breakdown">
            <RatingBreakdown stars={this.state.averageStars} metaData={this.state.metaData} />
            <ProductBreakdownMain charData={this.state.charData} itemId={this.props.itemId} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>This product doesn't have any reviews yet. Be the first one to write one!</h3>

          <button onClick={this.handleWriteReviewClick}>
            Add a review +
          </button>
          {this.state.showAdd ? <WriteReview hide={this.handleWriteReviewClick} charData={this.state.charData} itemId={this.props.itemId}/> : null}
        </div>
      )
    }
  }
}

export default PrivacyHOC(ReviewsAndRatings);


// API: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/"