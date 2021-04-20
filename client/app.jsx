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
          currentItem: response.data[0],
          currentItemId: response.data[0].id,
          averageStars: null
        })
      })
      .then(() => {
        axios.get(`/reviews/${this.state.currentItemId}`)
          .then((response) => {
<<<<<<< HEAD
            //console.log('reviews response data: ', response.data.results);
=======
>>>>>>> d12c58102681bbf06c41b287b92e2521db4a8166
            this.setState({
              numberOfReviews: response.data.results.length,
              reviewData: response.data.results
            });
          })
          .catch((error) => {
            console.log('error getting our response from styles get: ', error)
          })
        axios.get(`/reviews/meta/${this.state.currentItemId}`)
          .then((response) => {
<<<<<<< HEAD
=======
            console.log('response ratings', response.data.ratings);
>>>>>>> d12c58102681bbf06c41b287b92e2521db4a8166

            var rateObj = response.data.ratings;
            var result = 0;
            var numRating = 0;

            for (var key in rateObj) {

              result = result + Number(key)*Number(rateObj[key]);
              numRating = numRating + Number(rateObj[key]);
            }

            var currRating = result/numRating;

            this.setState({
              averageStars: currRating
            })
<<<<<<< HEAD
            //console.log('state check of averageStars: ', this.state.averageStars)
=======
             console.log('state check of averageStars: ', this.state.averageStars)
>>>>>>> d12c58102681bbf06c41b287b92e2521db4a8166
          })

          .catch((error) => {
            console.log('error inside reviews meta get: ', error)
          })
      })

      .catch((error) => {
        console.log('error in app.jsx axios get request, error:', error)
      })
<<<<<<< HEAD
=======


>>>>>>> d12c58102681bbf06c41b287b92e2521db4a8166

  }

  relatedClick(e) {
    console.log('the click worked', e)
    this.setState({
      currentItem: e
    })
  }

  render() {
<<<<<<< HEAD
    console.log('averageStars val: ', this.state.averageStars);
    if (this.state.averageStars) {
=======
  if (this.state.averageStars) {
>>>>>>> d12c58102681bbf06c41b287b92e2521db4a8166
      return (
        <div>
          <div>HELLO</div>
          < Overview data={this.state.data} currentItem={this.state.currentItem} stars={this.state.averageStars}/>
          <RelatedItemsAndComparison data={this.state.data} currentItem={this.state.currentItem} click={ this.relatedClick }/>
          <QandA_app currentItem={this.state.currentItem}/>
          <ReviewsAndRatings stars={this.state.averageStars} itemId={this.state.currentItemId} reviewData={this.state.reviewData} numReviews={this.state.numberOfReviews}/>
        </div>
      )
    } else {
      return null;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));