import React from 'react';
import ProductBreakdownBar from './ProductBreakdownBar.jsx';

class ProductBreakdownMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charDescriptionObj: {
        'Size': <div className="mm-chardesc-container"><span style={{fontSize: "8pt"}}>A size too small</span><span style={{fontSize: "8pt"}}>Perfect</span><span style={{fontSize: "8pt"}}>Perfect</span></div>,
        'Width': <div className="mm-chardesc-container"><span style={{fontSize: "8pt"}}>Too Narrow</span><span style={{fontSize: "8pt"}}>Perfect</span><span style={{fontSize: "8pt"}}>Too Wide</span></div>,
        'Comfort': <div className="mm-chardesc-container"><span style={{fontSize: "8pt"}}>Uncomfortable</span><span style={{fontSize: "8pt"}}>Ok</span><span style={{fontSize: "8pt"}}>Perfect</span></div>,
        'Quality': <div className="mm-chardesc-container"><span style={{fontSize: "8pt"}}>Poor</span><span style={{fontSize: "8pt"}}>What I Expected</span><span style={{fontSize: "8pt"}}>Perfect</span></div>,
        'Length': <div className="mm-chardesc-container"><span style={{fontSize: "8pt"}}>Runs Short</span><span style={{fontSize: "8pt"}}>Perfect</span><span style={{fontSize: "8pt"}}>Runs Long</span></div>,
        'Fit': <div className="mm-chardesc-container"><span style={{fontSize: "8pt"}}>Runs Tight</span><span style={{fontSize: "8pt"}}>Perfect</span><span style={{fontSize: "8pt"}}>Runs Long</span></div>
      }
    };
    this.doSomethingWithData = this.doSomethingWithData.bind(this);
    this.makeTableObj = this.makeTableObj.bind(this);
  }

  componentDidMount() {
    this.doSomethingWithData(this.props.charData);

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
        newArr.push([arr[i][0], <div ><ProductBreakdownBar char={arr[i][0]} desc={this.state.charDescriptionObj} bgcolor={"slategrey"}
          completed={arr[i][1].value * 20} /></div>

        ])
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