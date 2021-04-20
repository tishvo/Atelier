import React from 'react';

class AddToCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: []
    }
  }



  render () {

    if (this.props.quantitiesArray[0] !== '-') {

    return (<div>
      <button id="af-add-to-cart" onClick={this.props.click}


      >Add to Cart</button>

      </div>)
    } else {
      return null;
    }
  }
}

export default AddToCard;