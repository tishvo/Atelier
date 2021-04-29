import React from 'react';
import axios from 'axios';

import RelatedProducts from './subcomponents/RelatedProducts.jsx'
import YourOutfit from './subcomponents/YourOutfit.jsx'
import PrivacyHOC from '../ClickTrackingHOC.js'


class RelatedItemsAndComparison extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: ''
    };

    this.fetchData = this.fetchData.bind(this);
    this.PrivacyHOC = PrivacyHOC.bind(this);

  }

  fetchData() {
    axios.get(`/products/${this.props.currentItem.id}`)
    .then(res => {

      this.setState({
        currentItem: res.data
      })
    })
    .catch(err => {
      console.log('RELATED PRODUCTS INDEX GET ERROR: ', err)
    })
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentItem !== prevProps.currentItem) { this.fetchData(); }
  }

  render() {
    return (
      <div className="rr_rpMain">
        <div>
          <RelatedProducts currentItem={this.state.currentItem} click={this.props.click}/>
          <YourOutfit currentItem={this.state.currentItem} click={this.props.click}/>
        </div>
      </div>
    )
  }
}

export default PrivacyHOC(RelatedItemsAndComparison);