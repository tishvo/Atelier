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
      currentItem: null,
      currentItemId: null
    }
    this.relatedClick = this.relatedClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
<<<<<<< HEAD
=======
    this.fetchData = this.fetchData.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);

>>>>>>> 0605038c68a7d5a32c147f06f2310d94ad194910
    this._isMounted = false;
  }

  fetchData() {
    axios.get('/products')
    .then((response) => {
      console.log('this is our initial project data:', response.data)

      this._isMounted && this.setState({
        currentItem: response.data[0],
        currentItemId: response.data[0].id,
      }, () => {
        console.log('this is the state of app.jsx--> ', this.state)
      })
    })
    .catch((error) => {
      console.log('ERRORR in app.jsx axios get request, error:', error)
    })
  }

  componentDidMount() {

  // if(!localStorage['websiteTraffic']) {

  //   localStorage['websiteTraffic'] = {
  //     'Overview': '',
  //     'Related Items And Comparisons': '',
  //     'Questions and Answers': '',
  //     'Reviews and Ratings': ''
  //   }
  // }
    this._isMounted = true;
    this._isMounted && this.fetchData();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  relatedClick(e) {
    console.log('the click worked', e, e.id)
    this._isMounted = true;
    this._isMounted && this.setState({
      currentItem: e,
      currentItemId: e.id
    })
  }

  render() {
    console.log('checking on currentItem state in app.jsx: ', this.state.currentItem);
    console.log('checkig on currentItemId state in app.jsx: ', this.state.currentItemId);
    if (this.state.currentItem) {
      return (
        <div className="rr-column-container">
          <div>HELLO</div>
          < Overview currentItem={this.state.currentItem} widget='Overview' />
          <RelatedItemsAndComparison currentItem={this.state.currentItem} click={this.relatedClick} widget='Related Items And Comparisons' />
          <QandA_app currentItem={this.state.currentItem} widget='Questions and Answers' />
          <ReviewsAndRatings itemId={this.state.currentItemId} widget='Reviews and Ratings' />
        </div>
      )
    } else {
      return null;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));