import React from 'react';
import SizeQuantitySelector from './SizeQuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';
import axios from 'axios';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      skusArray: null,
      quantitiesArray: ['-'],
      cart: [],
      currentSize: null,
      currentQuantity: 1,

    }
    this.createSizes = this.createSizes.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
    this.chooseQuantity = this.chooseQuantity.bind(this)
    this.addToLocalCart = this.addToLocalCart.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    // delete localStorage['cart'];
    console.log('this is skus obj', this.props.skus)
    console.log('this is localStorage: ', localStorage)

    if (!localStorage['cart']) {
      localStorage['cart'] = '['
    }

    var skusArray = []
    let skus = this.props.skus;

    for (var key in skus) {
      let tempObj = {
        sku_id: key,
        quantity: skus[key].quantity,
        size: skus[key].size
      }

      skusArray.push(tempObj)
    }

    this.setState({
      skusArray: skusArray
    })
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.skus) !== JSON.stringify(prevProps.skus)) {
      this.componentDidMount()
    }
  }

  createSizes(e) {
    console.log('in createSizes, this is e: ', e)
    var eArray = e.split(',')
    var sizesArray = []
    for (var i = 1; i <= Number(eArray[1]) && i <= 15; i++) {
      sizesArray.push(i.toString());
    }
    this.setState({
      quantitiesArray: sizesArray,
      currentSize: eArray[2],
      currentSku: eArray[0]
    })
  }


  addToCart() {
    console.log('in addToCart')
    let objToAdd = {
      sku_id: this.state.currentSku,
      // product: this.props.productName,
      // style: this.props.styleName,
      // size: this.state.currentSize,
      count: this.state.currentQuantity
    }

    console.log('addToCart objToAdd; ', objToAdd)

      axios.post('/cart', objToAdd)
      .then((response) => {
        console.log('successfully added item to cart!')
      })
      .catch((error) => {
        console.log('error in adding to cart! ', error)
      })


  }


  addToLocalCart() {

    let objToAdd = {
      sku_id: this.state.currentSku,
      product: this.props.productName,
      style: this.props.styleName,
      size: this.state.currentSize,
      quantity: this.state.currentQuantity
    }

    if (localStorage['cart'].length === 1) {
      localStorage['cart'] = localStorage['cart'] + (JSON.stringify(objToAdd)) + ']'

    } else {
      localStorage['cart'] = localStorage['cart'].slice(0, -1) + ', ' + (JSON.stringify(objToAdd)) + ']'
    }

    console.log('this is localStorage now: ', localStorage)

    // localStorage.setItem('cart', objToAdd)


  }

  chooseQuantity(value) {

    this.setState({
      currentQuantity: Number(value)
    })


  }



  render() {
    console.log('this is skusArray: ', this.state.skusArray)

    if (this.state.skusArray) {
      return (
        <div id="af-user-customization">
          <select id="af-size-selector"
            onChange={() => this.createSizes(event.target.value)}>
            <option hidden="Select Size">Select Size</option>
            {this.state.skusArray.map((obj, index) => {
              return <option key={index} value={[obj.sku_id, obj.quantity, obj.size]} size={obj.size} >{obj.size}</option>
            }
            )}
          </select>

          <SizeQuantitySelector chooseQuantity={this.chooseQuantity} quantities={this.state.quantitiesArray} />
          <AddToCart addToLocalCart={this.addToLocalCart} addToCart={this.addToCart}
            quantitiesArray={this.state.quantitiesArray} />


        </div>

      )
    } else {
      return null;
    }
  }
}

export default SizeSelector;