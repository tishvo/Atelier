import React from 'react';

const SortingOptions = (props) => {
  return (
    <div>
      {props.numReviews} reviews, sorted by
      <select>
        <option value='relevant'>Relevant</option>
        <option value='helpful'>Helpful</option>
        <option value='recent'>Recent</option>
      </select>
    </div>
  )
}

export default SortingOptions;