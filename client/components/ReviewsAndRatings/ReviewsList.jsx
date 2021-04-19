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
    this.currReviewResize = this.currReviewResize.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    var fill = this.props.reviewData.slice(0, this.state.visibleReviewVal);
    this.setState({
      currReviews: fill
    });
  }

  //make the current array of reviews contain the reviews to be shown
  currReviewResize() {
    console.log('this');
  }

  handleClick(event) {
    event.preventDefault();
    console.log('first: ', this.state.visibleReviewVal);
    this.setState({
      visibleReviewVal: this.state.visibleReviewVal += 2,
      currReviews: this.props.reviewData.slice(0, this.state.visibleReviewVal)
    })
    console.log('second: ', this.state.visibleReviewVal);

  }

  //function that will be passed down to SortingOptions that will change sorting order of the currReviews
  handleSortingChange(e) {
    this.setState({
      currentOrder: e.target.value
    });
  }

  render() {

    console.log('ReviewList reviewData: ', this.props.reviewData);
    console.log('ReviewList currReviews: ', this.state.currReviews);
    //console.log('cutting down reviewlist: ', this.props.reviewData.slice(0, 2));



    return (
      <div>
        <div>
          {/* Sorting Dropdown Menu */}
          {this.props.numReviews} reviews, sorted by
          <select onChange={this.handleSortingChange}>
            <option value='relevant'>Relevant</option>
            <option value='helpful'>Helpful</option>
            <option value='newest'>Newest</option>
          </select>

        </div>
        {this.state.currReviews.map((item, index) => {
          return (
            <ReviewTile key={index} stars={this.props.stars} itemId={this.props.itemId} reviewData={item} />
          )
        })}
        <form>
          <button onClick={this.handleClick}>
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