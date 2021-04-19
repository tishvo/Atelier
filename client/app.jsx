import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx'
import PAT from '../config.js';
import QandA_app from './components/Q&A/QandA_app.jsx';
import ReviewsAndRatings from './components/ReviewsAndRatings/ReviewsAndRatings.jsx';
import RelatedItemsAndComparison from './components/RelatedItemsAndComparison/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      currentItem: null
    }
  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => {
        console.log('this is initial product data: ', response.data)
        this.setState({
          data: response.data,
          currentItem: response.data[2]
        })
      })
      .catch((error) => {
        console.log('error in app.jsx axios get request, error:', error)
      })

let itemId = '19089'
        // get the reviews by id
        axios.get(`/reviews/${itemId}`)
        .then((response) => {
          console.log('gt our reviews data: ', response)
        })
        .catch((error) => {
          console.log('error getting our response from styles get: ', error)
        })
  }

  render() {
    if (this.state.data) {
      return (
        <div>
          <div>HELLO</div>
          < Overview data={this.state.data} currentItem={this.state.currentItem} />
          <RelatedItemsAndComparison />
          <QandA_app />
          <ReviewsAndRatings />
        </div>
      )
    } else {
      return null;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));