import React from 'react';
import axios from 'axios';

class AddToCart extends React.Component {
  constructor(props) {
    super(props)


  }

  componentDidMount() {
    axios.get('/cart')
    .then((response) => {
      console.log('we have our cart data! ', response.data)
    })
    .catch((error) => {
      console.log('error in our /cart GET, client-side: ', error)
    })
  }


  render () {

    if (this.props.quantitiesArray[0] !== '-') {

    return (<div>
      <button id="af-add-to-cart" onClick={() => {
        this.props.addToLocalCart()
        this.props.addToCart()
      }}


      >Add to Cart</button>

      </div>)
    } else {
      return null;
    }
  }
}

export default AddToCart;