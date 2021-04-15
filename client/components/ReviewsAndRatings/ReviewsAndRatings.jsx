import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewTile.jsx';


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
        <ReviewList />
        <form>
          <select>Make a choice, yo! :
            <option>Relevant</option>
            <option>Newest</option>
            <option>Helpful</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ReviewsAndRatings;


// API: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/"