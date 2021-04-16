import React from 'react';

const SortingOptions = (props) => {
  return (
    <div>
      Sorting Options
      <select>
        <option>Relevant</option>
        <option>Helpful</option>
        <option>Recent</option>
      </select>
    </div>
  )
}

export default SortingOptions;