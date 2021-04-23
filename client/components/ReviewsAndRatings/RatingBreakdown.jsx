import React from 'react';
import StarRating from './StarRating.jsx';
import RatingProgressBar from './RatingProgressBar.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendPercent: 100,
      ratingsArray: []
    };
    this.averageRecommends = this.averageRecommends.bind(this);
    this.arrayFromRatings = this.arrayFromRatings.bind(this);
    this.percentageOfVotesTotal = this.percentageOfVotesTotal.bind(this);
  }

  componentDidMount() {
    this.averageRecommends(this.props.metaData.recommended);
    this.arrayFromRatings(this.props.metaData.ratings)
    //console.log('checking a percentage %%%%%%%', this.percentageOfVotesTotal(this.props.metaData.ratings, 5));
  }

  componentDidUpdate(prevProps) {
    console.log('ratingBreakdown prop stuff: ', this.props.metaData.product_id, prevProps.metaData.product_id)
    if (this.props.metaData.product_id !== prevProps.metaData.product_id) {
      this.averageRecommends(this.props.metaData.recommended);
      this.arrayFromRatings(this.props.metaData.ratings);
    }
  }

  //average the recommendations for a percentage
  averageRecommends(obj) {
    this.setState({
      recommendPercent: Math.floor((obj.false + obj.true) / obj.true)
    })
  }

  arrayFromRatings(obj) {
    var arr = [];
    //for each key in the ratings obj
    for (var key in obj) {
      //make a new div passing the value as props
      arr.push([key, obj[key]]);
    }
    this.setState({
      ratingsArray: arr
    })
  }

  //figure out the percentage of the vote a star got
  percentageOfVotesTotal(obj, val) {
    var totalVotes = 0;
    for (var key in obj) {
      totalVotes = totalVotes + Number(obj[key]);
    }
    return Math.floor((obj[val]/totalVotes) * 100);
  }


  /* *********this is render zone********** */
  render() {
    //console.log(this.props.metaData.ratings);
    //console.log('THIS IS AN ARRAY OF vals FROM THIS ITEM', this.state.ratingsArray)
    console.log("STARS", this.props.stars);
    return (
      <div>
        {this.props.stars.toFixed(2)}<StarRating stars={this.props.stars} />
        <div>{this.state.recommendPercent}% of reviews recommend this product</div>
        {this.state.ratingsArray.map((char, index) => {
          return (
            //console.log('this is a bunch of % ', this.percentageOfVotesTotal(this.props.metaData.ratings, Number(char[0])))
            <div key={index}>{char[0]}<RatingProgressBar bgcolor={"grey"} completed={this.percentageOfVotesTotal(this.props.metaData.ratings, Number(char[0]))}/></div>
          )
        })}

      </div>
    )
  }
}

export default RatingBreakdown;