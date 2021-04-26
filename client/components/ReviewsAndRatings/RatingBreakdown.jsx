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
    //console.log('ratingBreakdown prop stuff: ', this.props.metaData.product_id, prevProps.metaData.product_id)
    if (this.props.metaData.product_id !== prevProps.metaData.product_id) {
      this.averageRecommends(this.props.metaData.recommended);
      this.arrayFromRatings(this.props.metaData.ratings);
    }
  }

  //average the recommendations for a percentage
  averageRecommends(obj) {
    var total = Number(obj.false) + Number(obj.true);
    this.setState({
      recommendPercent: Math.floor((Number(obj.true)/total) * 100)
    })
  }

  arrayFromRatings(obj) {
    var arr = [];
    var newObj = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    }
    //for each key in the ratings obj
    for (var key in obj) {
      newObj[key] = obj[key]
    }
    for (var key in newObj) {
      arr.push([key, newObj[key]]);
    }
    this.setState({
      ratingsArray: arr
    })
  }

  //figure out the percentage of the vote a star got
  percentageOfVotesTotal(arr, val) {
    var totalVotes = 0;
    for (var i = 0; i < arr.length; i++) {
      totalVotes = totalVotes + Number(arr[i][1]);
    }

    return Math.floor((arr[val - 1][1]/totalVotes) * 100);
  }


  /* *********this is render zone********** */
  render() {
    //console.log('RATING BREAKDOWN: ', this.props.metaData.ratings)
    return (
      <div>
        {this.props.stars.toFixed(1)}<StarRating stars={this.props.stars} />
        <div>{this.state.recommendPercent}% of reviews recommend this product</div>
        {this.state.ratingsArray.map((char, index) => {
          //console.log('INSIDE THE BELLY OF THE BEAST', this.state.ratingsArray)

          return (
            //console.log('this is a bunch of % ', this.percentageOfVotesTotal(this.props.metaData.ratings, Number(char[0])))
            <div key={index}>{char[0]}<RatingProgressBar bgcolor={"grey"} completed={this.percentageOfVotesTotal(this.state.ratingsArray, Number(char[0]))}/></div>
          )
        })}

      </div>
    )
  }
}

export default RatingBreakdown;