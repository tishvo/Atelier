import React from 'react';
import dummyReviewData from './dummyReviewData.js';
import axios from 'axios';
import API from './config.js';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyReviewData,
      data: {}
    };
  }

  componentDidMount() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=19089', {headers: { 'Authorization': `${API}` }})
    .then ((response) => {
      console.log(response);
      this.setState({
        data: response
      })
    })
    .catch((error) => {
      console.log('this is the error: ', error)
    })
  }

  render() {

    return (
      <div>
        <p>This is where the reviews will live</p>
        <form>
          <button>
            More Reviews
          </button>
        </form>
      </div>
    );
  }
};

export default ReviewTile;