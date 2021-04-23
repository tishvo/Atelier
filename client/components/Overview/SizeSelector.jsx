import React from 'react';
import SizeQuantitySelector from './SizeQuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      skusArray: null,
      quantitiesArray: ['-'],
      cart: [],
      currentSize: null,
      currentQuantity: null,

    }
    this.createSizes = this.createSizes.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
    this.chooseQuantity = this.chooseQuantity.bind(this)
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
      skusArray.push(skus[key])
    }

    this.setState({
      skusArray: skusArray
    })
  }

  componentDidUpdate(prevProps) {
    // console.log('sizeselector updated!', prevProps.skus)
    // console.log('current: ', this.props.skus)
    if (JSON.stringify(this.props.skus) !== JSON.stringify(prevProps.skus)) {
      // var skusArray = []
      // let skus = this.props.skus;
      // for (var key in skus) {
      //   skusArray.push(skus[key])
      // }

      // this.setState({
      //   skusArray: skusArray
      // })
      this.componentDidMount()
    }
  }

  createSizes(e, s) {
    // console.log('this is e in createSizes', e.split(','))
    // console.log('this is s in createSizes', s)
    var eArray = e.split(',')
    var sizesArray = []
    for (var i = 1; i <= Number(eArray[0]) && i <= 15; i++) {
      sizesArray.push(i.toString());
    }
    this.setState({
      quantitiesArray: sizesArray,
      currentSize: eArray[1]
    })

  }



  addToCart() {
    let objToAdd = {
      product: this.props.productName,
      style: this.props.styleName,
      size: this.state.currentSize,
      quantity: this.state.currentQuantity
    }

    // let localData = []
    console.log('objToAdd: ', objToAdd)
    this.state.cart.push(objToAdd)
    console.log('this.state.cart: ', this.state.cart)

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
    // console.log('this is skusArray: ', this.state.skusArray)

    if (this.state.skusArray) {
      return (
        <div id="af-user-customization">
          <select id="af-size-selector"
            onChange={() => this.createSizes(event.target.value)}>
            <option hidden="Select Size">Select Size</option>
            {this.state.skusArray.map((obj, index) => {
              return <option key={index} value={[obj.quantity, obj.size]} size={obj.size} >{obj.size}</option>
            }
            )}
          </select>

          <SizeQuantitySelector chooseQuantity={this.chooseQuantity} quantities={this.state.quantitiesArray} />
          <AddToCart click={this.addToCart}
            quantitiesArray={this.state.quantitiesArray} />


        </div>

      )
    } else {
      return null;
    }
  }
}

export default SizeSelector;