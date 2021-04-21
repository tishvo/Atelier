import React from "react";
export default class ComparisonModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mainItemData: {},
      comparisonItemData: {},
      comparisonChars: [],
      mainChars: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderTableRows = this.renderTableRows.bind(this);
  }
  componentDidMount() {
    this.setState({
      mainItemData: this.props.mainData(),
      comparisonItemData: this.props.comparisonData
    }, () => {
      var allFeatures;
      if (this.state.mainItemData.features) {
        var mainFeatures = [];
        // loop through main features and add them to mainFeatures array
        for (var i = 0; i < this.state.mainItemData.features.length; i ++) {
          mainFeatures.push(this.state.mainItemData.features[i]);
        }
      }

      if (this.state.comparisonItemData.features) {
        var comparisonFeatures = [];
        // loop through comparison features and add them to mainFeatures array
        for (var j = 0; j < this.state.comparisonItemData.features.length; j ++) {
          comparisonFeatures.push(this.state.comparisonItemData.features[j]);
        }
      }
      // send these to state
      this.setState({
        comparisonChars: comparisonFeatures || [],
        mainChars: mainFeatures || []
      })
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.comparisonData !== prevProps.comparisonData) { this.componentDidMount(); }
  }

  checkMainChars(char) {
    if (this.state.mainChars.includes(char)) {
      return <div> &#10003; </div>
    }
    return <div> &#10008; </div>
  }
  checkComparisonChars(char) {
    if (this.state.comparisonChars.includes(char)) {
      return <div> &#10003; </div>
    }
    return <div> &#10008; </div>
  }

  renderTableRows() {
    var allChars = [];
    if (this.state.mainChars) {
      for (var k = 0 ; k < this.state.mainChars.length; k ++) {
        allChars.push(this.state.mainChars[k]);
      }
    }
    if (this.state.comparisonChars) {
      for (var k = 0 ; k < this.state.comparisonChars.length; k ++) {
        allChars.push(this.state.comparisonChars[k]);
      }
    }
    return (
      <tbody>
          {allChars.map((characteristic, index) => {
            return (
              <tr key={index} >
                <td>{this.checkMainChars(characteristic)}</td>
                <td>{characteristic.feature}</td>
                <td>{this.checkComparisonChars(characteristic)}</td>
              </tr>
            )
          })}
      </tbody>
    );
  }

  renderTable() {
    return (
      <div className='rr-row-container'>
        <table>
          <thead>
            <tr>
              <td>{this.state.mainItemData.name}</td>
              <td>Characteristic</td>
              <td>{this.state.comparisonItemData.name}</td>
            </tr>
          </thead>
          { this.renderTableRows() }
        </table>
      </div>
    )
  }
  render() {
    if(!this.props.show){
      return null;

    } else {
      return (
        <div className='rr-comparison-modal' >
          <div className="rr-modal-content">
            <h2> Comparing </h2>
            { this.renderTable() }
            <button
              onClick={(e => { this.props.close(e); })}>
              Close
            </button>
          </div>
        </div>
        );
    }
  }
}