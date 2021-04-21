import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddAModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: ''
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
      <div className="qModal qContent" id="qModal">
        <h3>Submit Your Answer</h3>
        <h5>About the {this.props.product.name}: {this.props.question}</h5>
        <div>Your Answer*: <input value={this.state.answer} placeholder="type here" size="50"></input></div>
        <div>What is your nickname*? <input placeholder="Example: jack543!" value={this.state.nickname}></input></div>
        <div>For privacy reasons, do not use your full name or email address</div>
        <div>Your email*: <input placeholder="Example: jack@email.com" value={this.state.email} size="50"></input></div>
        <div>For authentication reasons, you will not be emailed</div>

        <div className="qaModalToggle"><button className="qaModalToggle" onClick={this.onClose}>Submit</button></div>
      </div>
    )
  }
}

export default AddAModal;