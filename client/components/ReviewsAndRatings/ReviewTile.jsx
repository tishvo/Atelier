import React from 'react';
import StarRating from './StarRating.jsx';
import moment from 'moment';

class ReviewTile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <StarRating stars={this.props.reviewData.rating}/>
        <div>{this.props.reviewData.reviewer_name}, {moment(this.props.reviewData.date).format('MMM Do YYYY')}</div>
        <p>Review Summary:{this.props.reviewData.summary}</p>
        <p>Review Body:{this.props.reviewData.body}</p>
        {/*How do we want to handle a response? make a whole component?
          i could handle it with state
        */}
      </div>
    )
  }
}

export default ReviewTile;