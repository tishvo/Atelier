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

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.PrivacyHOC = PrivacyHOC.bind(this);

    this._isMounted = false;
  }

  fetchData() {
    axios.get(`/products/${this.props.currentItem.id}`)
    .then(res => {

      this._isMounted && this.setState({
        currentItem: res.data
      })
    })
    .catch(err => {
      console.log('RELATED PRODUCTS INDEX GET ERROR: ', err)
    })
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentItem !== prevProps.currentItem) { this.fetchData(); this.render(); }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <div>
          <RelatedProducts currentItem={this.state.currentItem}
            click={this.props.click}/>
          <YourOutfit currentItem={this.state.currentItem} click={this.props.click}/>
        </div>
      </div>
    )
  }
}

export default PrivacyHOC(RelatedItemsAndComparison);