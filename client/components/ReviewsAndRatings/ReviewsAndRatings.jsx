import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';




class ReviewsAndRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      reviewData: [],
      numberOfReviews: 0,
      averageStars: '',
      rateObj: {},
      metaData: null

    };
    this.getReviewsForItem = this.getReviewsForItem.bind(this);
    this.getReviewsForReviewMeta = this.getReviewsForReviewMeta.bind(this);
  }

  componentDidMount() {
    //GET request for Reviews
    this.getReviewsForItem();

    //GET request for Rating Meta data
    this.getReviewsForReviewMeta();

  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      //GET request for Reviews
      this.getReviewsForItem();

      //GET request for Rating Meta data
      this.getReviewsForReviewMeta();
    }
  }

  getReviewsForItem() {
    axios.get(`/reviews/${this.props.itemId}&count=1000`)
      .then((response) => {
        this.setState({
          numberOfReviews: response.data.results.length,
          reviewData: response.data.results
        });
      })
      .catch((error) => {
        console.log('error getting our response from reviews get: ', error)
      })
  }

  getReviewsForReviewMeta() {
    axios.get(`/reviews/meta/${this.props.itemId}`)
      .then((response) => {
        this.setState({
          rateObj: response.data.ratings,
          metaData: response.data
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

  render() {

    if (this.state.averageStars) {
      return (
        <div>
          <ReviewsList stars={this.state.averageStars} itemId={this.props.itemId} reviewData={this.state.reviewData} numReviews={this.state.numberOfReviews} />
          <RatingBreakdown stars={this.state.averageStars} metaData={this.state.metaData} />
        </div>
      );
    } else {
      return (
        <div>ADD A REVIEW</div>
      )
    }

  }
}

export default ReviewsAndRatings;


// API: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/"