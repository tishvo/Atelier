import React from 'react';

const SortingOptions = (props) => {
  return (
    <div>
      {props.numReviews} reviews, sorted by
      <select>
        <option>Relevant</option>
        <option>Helpful</option>
        <option>Recent</option>
      </select>
    </div>
  )
}

export default SortingOptions;