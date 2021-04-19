import React from 'react';
import StarRating from './StarRating.jsx';

const ReviewTile = (props) => {
  return (
    <div>
      <StarRating />
      <p>Review Body:{props.reviewData.body}</p>
    </div>
  )
}

export default ReviewTile;