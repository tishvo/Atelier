import React from 'react';
import axios from 'axios';

import YOCard from './YOCard.jsx'

class YourOutfit extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>Your Outfit Carousel (User generated)</div>
      </div>
    )
  }
}

export default YourOutfit;