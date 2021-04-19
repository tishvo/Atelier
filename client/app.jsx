import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx'
// import PAT from '../config.js';
import QandA_app from './components/Q&A/QandA_app.jsx';
import ReviewsAndRatings from './components/ReviewsAndRatings/ReviewsAndRatings.jsx';
import RelatedItemsAndComparison from './components/RelatedItemsAndComparison/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      currentItem: null,
      currentRatingMeta: {}

    }

  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => {

        this.setState({
          data: response.data,
          currentItem: response.data[0],
          currentItemId: response.data[0].id
        })
      })
      .then(() => {
        axios.get(`/reviews/${this.state.currentItemId}`)
          .then((response) => {
            //console.log('gt our reviews data: ', response);
            this.setState({
              numberOfReviews: response.data.results.length
            });
          })
          .catch((error) => {
            console.log('error getting our response from styles get: ', error)
          })
        //console.log('after reviews get request');
        axios.get(`/reviews/meta/${this.state.currentItemId}`)
          .then((response) => {
            //console.log('check from inside meta reveiew data');
            console.log('response ratings', response.data.ratings);

            var rateObj = response.data.ratings;
            var result = 0;
            var numRating = 0;
            console.log('result: ', result);
            console.log('rateObj: ', this.state.ratingObj);
            for (var key in rateObj) {
              console.log('numKey');
              result = result + Number(key)*Number(rateObj[key]);
              numRating = numRating + Number(rateObj[key]);
            }
            console.log('result: ', result);
            console.log('numRating: ', numRating);
            var currRating = result/numRating;

            this.setState({
              averageStars: currRating
            })
            console.log('state check of averageStars: ', this.state.averageStars)
          })

          .catch((error) => {
            console.log('error inside averageStar making: ', error)
          })
      })

      .catch((error) => {
        console.log('error in app.jsx axios get request, error:', error)
      })



  }



  render() {
  if (this.state.data) {
      return (
        <div>
          <div>HELLO</div>
          < Overview data={this.state.data} currentItem={this.state.currentItem} />
          <RelatedItemsAndComparison />
          <QandA_app currentItem={this.state.currentItem}/>
          <ReviewsAndRatings />
        </div>
      )
    } else {
      return null;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));