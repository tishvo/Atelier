import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';


class ReviewsAndRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    // componentDidMount() {
    //   axios.get()
    // }

    return (
      <div> Reviews and Ratings
        <ReviewsList />
      </div>
    );
  }
}

export default ReviewsAndRatings;


// API: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/"