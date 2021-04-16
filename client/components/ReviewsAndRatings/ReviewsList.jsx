import React from 'react';
import dummyReviewData from './dummyReviewData.js';
import axios from 'axios';
//import { API } from './config.js';
import SortingOptions from './SortingOptions.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyReviewData,
      currentId: '',
      currReviews: [],
      visibleReviewVal: 0,
      totalReviews: 0,
      moreReviewsVis: true
    };
  }

  // componentDidMount() {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=19090', {headers: { 'Authorization': API }})
  //   .then ((response) => {
  //     console.log('response: ', response);
  //     this.setState({
  //       data: response
  //     })
  //   })
  //   .catch((error) => {
  //     console.log('this is the error: ', error)
  //   })
  // }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <SortingOptions />
        <form>
          <button>
            More Reviews
          </button>
          <button>
            Add a review +
          </button>
        </form>
      </div>
    );
  }
};

export default ReviewTile;