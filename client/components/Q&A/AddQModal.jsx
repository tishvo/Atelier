import React from 'react';
import ReactDOM from 'react-dom';

class AddQModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
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
      <div>
        <h3>Ask Your Question</h3>
        <h5>About the {this.props.product.name}</h5>
        <div>Your Question*: <input value={this.state.question} size="50"></input></div>
        <div>Your Nickname*: <input placeholder="Example: jackson11!" size="50"></input></div>
        For privacy reasons, do not use your full name or email address
        <div>Your Email*: <input placeholder="Why did you like the product or not?" size="50"></input></div>
        For authentication reasons, you will not be emailed
        <div><button onClick={this.onClose}>Submit</button></div>
      </div>
    )
  }
}

export default AddQModal;