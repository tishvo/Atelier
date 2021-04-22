import React from 'react';

class SizeQuantitySelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantities: this.props.quantities,
      currentQuantity: null
    }
  }

  // componentDidMount() {
  //   this.setState ({
  //     quantities: this.props.quantities
  //   })
  // }
  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.quantities) !== JSON.stringify(prevProps.quantities)) {
      this.setState ({
        quantities: this.props.quantities
      })

    }
  }


  render() {
    if (this.state.quantities[0] === '-') {
      return (<div>
        <select id="af-size-quantity-selector">
        <option hidden="-">-</option>
        </select>
      </div>)
    }
    return (
      <div>
        <select id="af-size-quantity-selector"
        onChange={() => this.props.chooseQuantity(event.target.value)}
        >
          {this.state.quantities.map((number, index) => {
            return <option key={index} value={number}>{number}</option>
          }

          )}
        </select>
      </div>
    )
  }
}

export default SizeQuantitySelector;