import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx'
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
    this.relatedClick = this.relatedClick.bind(this);
  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => {
        console.log('this is our initial project data:', response.data)

        this.setState({
          data: response.data,
          currentItem: response.data[4],
          currentItemId: response.data[4].id,
          averageStars: null
        })
      })
      .then(() => {
        axios.get(`/reviews/${this.state.currentItemId}`)
          .then((response) => {
            console.log('found our reviews data!', response.data.results)
            this.setState({
              numberOfReviews: response.data.results.length
            });
          })
          .catch((error) => {
            console.log('error getting our response from styles get: ', error)
          })
        axios.get(`/reviews/meta/${this.state.currentItemId}`)
          .then((response) => {
            // console.log('response ratings', response.data.ratings);
            var rateObj = response.data.ratings;
            var result = 0;
            var numRating = 0;
            // console.log('result: ', result);
            // console.log('rateObj: ', this.state.ratingObj);
            for (var key in rateObj) {
              // console.log('numKey');
              result = result + Number(key)*Number(rateObj[key]);
              numRating = numRating + Number(rateObj[key]);
            }
            // console.log('result: ', result);
            // console.log('numRating: ', numRating);
            var currRating = result/numRating;

            this.setState({
              averageStars: currRating
            })
            //  console.log('state check of averageStars: ', this.state.averageStars)
          })

          .catch((error) => {
            console.log('error inside averageStar making: ', error)
          })
      })

      .catch((error) => {
        console.log('error in app.jsx axios get request, error:', error)
      })



  }

  relatedClick(e) {
    console.log('the click worked', e)
    this.setState({
      currentItem: e
    })
  }

  render() {
  if (this.state.averageStars) {
      return (
        <div>
          <div>HELLO</div>
          < Overview numberOfReviews={this.state.numberOfReviews} data={this.state.data} currentItem={this.state.currentItem} stars={this.state.averageStars}/>
          <RelatedItemsAndComparison data={this.state.data} currentItem={this.state.currentItem} click={ this.relatedClick }/>
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