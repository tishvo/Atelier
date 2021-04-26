import React from 'react';
import ProductBreakdownBar from './ProductBreakdownBar.jsx';

class ProductBreakdownMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charDescriptionObj: {
        'Size': ['A size too small','Perfect', 'A size too wide'],
        'Width': ['Too Narrow', 'Perfect', 'Too wide'],
        'Comfort': ['Uncomfortable', 'Ok', 'Perfect'],
        'Quality': ['Poor', 'What I Expected', 'Perfect'],
        'Length': ['Runs Short', 'Perfect', 'Runs Long'],
        'Fit': ['Runs Tight', 'Perfect', 'Runs Long']
      }
    };
    this.doSomethingWithData = this.doSomethingWithData.bind(this);
    //this.mapCharData  = this.mapCharData.bind(this);
    this.getTheRightWords = this.getTheRightWords.bind(this);
  }
  componentDidMount() {
    this.doSomethingWithData(this.props.charData);
    this.getTheRightWords();
  }

  componentDidUpdate() {
    //this.doSomethingWithData(this.props.charData);
  }


  doSomethingWithData(data) {
    var arr = [];
    for (var key in data) {
      arr.push([key, data[key]])
    }
    console.log('the array of data values: ', arr);
    this.setState({
      dataArr: arr
    })
  }

  //get the correct set of desc. words from the object, set to an array for specific product
  getTheRightWords(arr) {
    console.log('in get the right words', this.state.dataArr)
  }

/*   //really might not need to use this, but thought i might need to map in a function
  mapCharData() {
    if (this.state.dataArr !== undefined) {
      this.state.dataArr.map((char, index) => {
        return (
          <div key={index}>{char[0]}<ProductBreakdownBar bgcolor={"grey"} completed={(Number(char[1].value) * 20).toFixed(0)}/></div>
        )
      })
    }
  } */


  render() {
    console.log('this is inside the breakdown', this.props.charData)
    console.log('dataArr: ', this.state.dataArr)
    return(
      <div>
        <h4>Product Breakdown</h4>

        {this.state.dataArr ? this.state.dataArr.map((char, index) => {
          return (
            <div key={index}>{char[0]}<ProductBreakdownBar bgcolor={"grey"} completed={(Number(char[1].value) * 20).toFixed(0)} /></div>
          )
        }) : null}
      </div >
    )
  }
}

export default ProductBreakdownMain;