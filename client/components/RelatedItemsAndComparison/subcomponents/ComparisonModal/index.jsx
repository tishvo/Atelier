import React from "react";
export default class ComparisonModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mainItemData: {},
      comparisonItemData: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }
  componentDidMount() {
    this.setState({
      mainItemData: this.props.mainData(),
      comparisonItemData: this.props.comparisonData
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.comparisonData !== prevProps.comparisonData) { this.componentDidMount(); }
  }

  render() {
    if(!this.props.show){
      return null;

    } else {
      return (
        <div className='rr-comparison-modal' >
          {console.log('props inside of Modal component: ', this.props)}
          <div className="rr-modal-content">
            <h2> Comparing </h2>

            <div className='rr-row-container'>
              <div>
                {this.state.mainItemData.name}
              </div>
              <div>
                {this.state.comparisonItemData.name}
              </div>
            </div>

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