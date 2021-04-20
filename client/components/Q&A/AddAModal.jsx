import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddAModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
      <div>
        <div className="qModal qContent" id="qModal">hello</div>
        <div className="qaModalToggle"><button onClick={this.onClose}>Submit</button></div>
      </div>
    )
  }
}

export default AddAModal;