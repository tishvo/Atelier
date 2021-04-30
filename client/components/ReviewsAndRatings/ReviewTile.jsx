import React from 'react';
import StarRating from './StarRating.jsx';
import moment from 'moment';
import { FaCheck } from 'react-icons/fa'

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseVisible: true,
      helpfulYes: this.props.reviewData.helpfulness,
      helpfulHasBeenClicked: false,
      recommend: false,
      arrayOfPhotos: [],
      currentReviewId: ''
    };
    this.helpfulClick = this.helpfulClick.bind(this);
  }

  componentDidMount() {
    console.log('THIS IS REVEIW DATA', this.props.reviewData)
    //check if there is a response to a review, set responseVisible to true
    if (this.props.reviewData.response === null) {
      this.setState({
        responseVisible: false
      });
    } else {
      this.setState({
        responseVisible: true
      });
    }

    //check if the current product is recommended, set to true if recommended
    if (this.props.reviewData.recommend) {
      this.setState({
        recommend: true
      });
    };

    //check to see if the current review contains images
    if (this.props.reviewData.photos.length > 0) {
      this.setState({
        arrayOfPhotos: this.props.reviewData.photos
      });
    }
  }



  /*
  FUNCTIONS
  */


  //only allows for one yes click, adds one to helpful
  helpfulClick(event) {
    event.preventDefault();
    if (!this.state.helpfulHasBeenClicked) {
      this.setState({
        helpfulYes: this.state.helpfulYes + 1,
        helpfulHasBeenClicked: true
      })
    }
  }

  render() {
    // console.log('this is reviewtile props reviewData: ', this.props.reviewData);
    // console.log('inside review data: ', this.props.reviewData.body);

    return (
      <div id="this is what you want">
        <StarRating stars={this.props.reviewData.rating} />
        <div>{this.props.reviewData.reviewer_name}, {moment(this.props.reviewData.date).format('MMM Do YYYY')}</div>
        {this.props.reviewData.photos.length > 0 ?

          this.props.reviewData.photos.map((photos, items) => {
            return (
                <img src={photos.url} key={items} className='mm-responsiveImage'></img>
            )
          })

          : null}
        <div>Review Summary: {this.props.reviewData.summary}</div>
        <div>Review Body: {this.props.reviewData.body}</div>
        {this.state.recommend ? <p><FaCheck /> I recommend this product</p> : null}
        {this.state.responseVisible ? <p>Response: {this.props.reviewData.response}</p> : null}
        <div>Helpful?
          <div onClick={this.helpfulClick}>Yes</div>
          <div>({this.state.helpfulYes})   |</div>
          <div>Report</div>

        </div>
      </div>
    )
  }
}

export default ReviewTile;