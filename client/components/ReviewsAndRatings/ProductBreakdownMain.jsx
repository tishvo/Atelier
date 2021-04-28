import React from 'react';
import ProductBreakdownBar from './ProductBreakdownBar.jsx';

class ProductBreakdownMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charDescriptionObj: {
        'Size': ['A size too small', 'Perfect', 'A size too wide'],
        'Width': ['Too Narrow', 'Perfect', 'Too wide'],
        'Comfort': ['Uncomfortable', 'Ok', 'Perfect'],
        'Quality': ['Poor', 'What I Expected', 'Perfect'],
        'Length': ['Runs Short', 'Perfect', 'Runs Long'],
        'Fit': ['Runs Tight', 'Perfect', 'Runs Long']
      }
    };
    this.doSomethingWithData = this.doSomethingWithData.bind(this);
    this.makeTableObj = this.makeTableObj.bind(this);
  }

  componentDidMount() {
    this.doSomethingWithData(this.props.charData);

  }

  componentDidUpdate(prevProps) {

    /*     console.log('chardata: ', this.props.charData)
    console.log('data', this.state.dataArr) */

  }

  doSomethingWithData(data) {
    var arr = [];
    for (var key in data) {
      arr.push([key, data[key]])
    }
    return arr;
  }

  makeTableObj(arr) {
    if (arr) {
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
        newArr.push([arr[i][0], <div><ProductBreakdownBar bgcolor={"grey"}
          completed={arr[i][1].value * 20} /></div>])
      }
      return (
        <div>
          <table>
            <tbody>
              {newArr.map((char, index) => {
                return (
                  <tr key={index}>
                    <td>{char[0]}</td>
                    <td>{char[1]}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }


  render() {

    return (
      <div>
        {this.makeTableObj(this.doSomethingWithData(this.props.charData))}
      </div>
    )
  }

}


export default ProductBreakdownMain;