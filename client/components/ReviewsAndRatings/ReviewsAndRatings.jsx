import React from 'react';
import axios from 'axios';

class ReviewsAndRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData:
    };
  }

  render() {

    componentDidMount() {
      axios.get()
    }

    return (
      <div> Reviews and Ratings
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