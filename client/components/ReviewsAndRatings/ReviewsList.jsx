import React from 'react';
import dummyReviewData from './dummyReviewData.js';
import axios from 'axios';
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
    //console.log('componentDidMount');
    var fill = this.props.reviewData.slice(0, this.state.visibleReviewVal);
    this.setState({
      currReviews: fill
    });
  }

  //make the current array of reviews contain the reviews to be shown
  currReviewResize() {
    console.log('this');
  }

  //click handler for 'more reviews' button
  handleClick(event) {
    event.preventDefault();
    this.setState({
      visibleReviewVal: this.state.visibleReviewVal += 2,
      currReviews: this.props.reviewData.slice(0, this.state.visibleReviewVal)
    })
  }

  //function that will be passed down to SortingOptions that will change sorting order of the currReviews
  handleSortingChange(e) {
    this.setState({
      currentOrder: e.target.value
    });
  }

  render() {

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