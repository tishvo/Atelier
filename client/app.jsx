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
    let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products';
    axios.get(url, {
      headers: {
        'Authorization': `${PAT}`
      }
    })
      .then((response) => {
        console.log('got our data! In our then statement. response: ', response)
        console.log('first item', response.data[0].description)
        this.setState({
          data: response.data,
          currentItem: response.data[3]
        })

      })
      .catch((error) => {
        console.log('error in Overview axios get request, error:', error)
      })
  }

  render() {
     console.log('this is the data', this.state.data)
    if (this.state.data) {
      return (
        <div>
          <div>HELLO</div>
          < Overview data={this.state.data} currentItem={this.state.currentItem} />
          <RelatedItemsAndComparison data={this.state.data} currentItem={this.state.currentItem} />
        </div>
      )
    } else {
      return null;
    }
  }

}

ReactDOM.render(<App />, document.getElementById('app'));