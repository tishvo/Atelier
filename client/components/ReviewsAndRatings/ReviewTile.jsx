import React from 'react';
import StarRating from './StarRating.jsx';
import moment from 'moment';

class ReviewTile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      responseVisible: true
    };
  }

  componentDidMount() {
    if(this.props.reviewData.response === null) {
      console.log('CDM is NULL');
      this.setState({
        responseVisible: false
      });
    }
  }

  checkForResponse() {
    if(this.props.reviewData.response === null) {
      console.log('there is a response');
    }
  }

  render() {
    console.log('is state changing? ', this.state.responseVisible);
    console.log('reviewData: ', this.props.reviewData);
    return (
      <div>
        <StarRating stars={this.props.reviewData.rating}/>
        <div>{this.props.reviewData.reviewer_name}, {moment(this.props.reviewData.date).format('MMM Do YYYY')}</div>
        <p>Review Summary: {this.props.reviewData.summary}</p>
        <p>Review Body: {this.props.reviewData.body}</p>
        {/*
          How do we want to handle a response? make a whole component?
          i could handle it with state
          have a function that check to see if reviewdata has a value.
          if it does, show the element
          else keep it hidden
        */}
        {this.state.responseVisible ? <p>Response: {this.props.reviewData.response}</p> : null}

      </div>
    )
  }
}

export default ReviewTile;