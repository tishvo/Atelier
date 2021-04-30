import React from 'react';
import StarRating from './StarRating.jsx';
import RatingProgressBar from './RatingProgressBar.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendPercent: 100,
      ratingsArray: [],
      fiveArray: [1, 2, 3, 4, 5]
    };
    this.averageRecommends = this.averageRecommends.bind(this);
    this.arrayFromRatings = this.arrayFromRatings.bind(this);
    this.percentageOfVotesTotal = this.percentageOfVotesTotal.bind(this);
    this.makeTableObj = this.makeTableObj.bind(this);
  }

  componentDidMount() {
    this.averageRecommends(this.props.metaData.recommended);
    this.arrayFromRatings(this.props.metaData.ratings);
  }

  componentDidUpdate(prevProps) {

    if (this.props.metaData.product_id !== prevProps.metaData.product_id) {
      this.averageRecommends(this.props.metaData.recommended);
      this.arrayFromRatings(this.props.metaData.ratings);
    }

  }

  //average the recommendations for a percentage
  averageRecommends(obj) {
    var total = Number(obj.false) + Number(obj.true);
    this.setState({
      recommendPercent: Math.floor((Number(obj.true) / total) * 100)
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

    return Math.floor((arr[val - 1][1] / totalVotes) * 100);
  }

  //makes the star ratings table
  makeTableObj(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[i + 1] = <div><RatingProgressBar bgcolor={"slategrey"} completed={this.percentageOfVotesTotal(arr, i + 1)} /></div>
    }
    return (
      <div id="mm-ratingbreakdown-starsandbars">
        <table>
          <tbody>
            <tr>
              <td>1 star</td>
              <td>{obj[1]}</td>
            </tr>

            <tr>
              <td>2 star</td>
              <td>{obj[2]}</td>
            </tr>

            <tr>
              <td>3 star</td>
              <td>{obj[3]}</td>
            </tr>

            <tr>
              <td>4 star</td>
              <td>{obj[4]}</td>
            </tr>

            <tr>
              <td>5 star</td>
              <td>{obj[5]}</td>
            </tr>
          </tbody>


        </table>
      </div>
    )
  }


  /* *********this is render zone********** */
  render() {
    console.log('this is the ratings array: ', this.state.ratingsArray)
    return (
      <div id="mm-ratingbreakdown-main">
        <div id="mm-ratingbreakdown-score">{this.props.stars.toFixed(1)}</div>
        <div id="mm-ratingbreakdown-scoreStars"><StarRating stars={this.props.stars} /></div>

        <div id="mm-ratingbreakdown-recco">{this.state.recommendPercent}% of reviews recommend this product</div>
        {this.makeTableObj(this.state.ratingsArray)}
      </div>
    )
  }
}

export default RatingBreakdown;