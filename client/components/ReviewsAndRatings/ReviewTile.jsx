import React from 'react';
import StarRating from './StarRating.jsx';
import moment from 'moment';

const ReviewTile = (props) => {
  console.log('Review Tile reviewData: ', props.reviewData);
  return (
    <div>
      <StarRating stars={props.reviewData.rating}/>
      <div>{props.reviewData.reviewer_name}, {moment(props.reviewData.date).format('MMM Do YYYY')}</div>
      <p>Review Summary:{props.reviewData.summary}</p>
      <p>Review Body:{props.reviewData.body}</p>
    </div>
  )
}

export default ReviewTile;