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

      currentId: '',
      currReviews: [],
      visibleReviewVal: 2,
      totalReviews: 0,
      moreReviewsVis: true,
      currentOrder: 'relevant'

    };
    this.handleSortingChange = this.handleSortingChange.bind(this);
  }

  //function that will be passed down to SortingOptions that will change sorting order of the currReviews
  handleSortingChange(e) {
    this.setState({
      currentOrder: e.target.value
    });
  }

  render() {
    console.log('currentOrder: ', this.state.currentOrder);
    return (
      <div>
        <div>

          {this.props.numReviews} reviews, sorted by
          <select onChange={this.handleSortingChange}>
            <option value='relevant'>Relevant</option>
            <option value='helpful'>Helpful</option>
            <option value='newest'>Newest</option>
          </select>

        </div>
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