import React from 'react';
import dummyReviewData from './dummyReviewData.js';
import axios from 'axios';
//import { API } from './config.js';
import SortingOptions from './SortingOptions.jsx';
import ReviewTile from './ReviewTile.jsx';

class ReviewList extends React.Component {
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



  render() {
    //console.log(this.state.data);
    return (
      <div>
        <SortingOptions numReviews={this.props.numReviews}/>
        {this.props.reviewData.map((item, index) => {
          return (
            <ReviewTile key={index} stars={this.props.stars} itemId={this.props.itemId} reviewData={item} />
          )
        })}
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

export default ReviewList;