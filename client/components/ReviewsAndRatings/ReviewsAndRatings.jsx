import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import PrivacyHOC from '../ClickTrackingHOC.js';




class ReviewsAndRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.PrivacyHOC = this.PrivacyHOC.bind(this);
  }

  render() {

    return (
      <div>
        <ReviewsList stars={this.props.stars} itemId={this.props.itemId} reviewData={this.props.reviewData} numReviews={this.props.numReviews}/>
      </div>
    );
  }
}

export default PrivacyHOC(ReviewsAndRatings);


// API: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/"