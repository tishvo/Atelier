import React from 'react';
import ReactDOM from 'react-dom';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="qModal qContent" id="qModal">
        <div>1: <input placeholder="enter photo URL here"></input></div>
        <div>2: <input placeholder="enter photo URL here"></input></div>
        <div>3: <input placeholder="enter photo URL here"></input></div>
        <div>4: <input placeholder="enter photo URL here"></input></div>
        <div>5: <input placeholder="enter photo URL here"></input></div>
        <div><button onClick={this.onClose}>Submit</button></div>
        </div>
    )
  }
}


export default PhotoModal;