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
    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.answer = this.answer.bind(this);
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
    this.answer()
  }

  onAnswerChange(e) {
    this.setState({
      answer: e.target.value
    })
  }

  onNameChange(e) {
    this.setState({
      nickname: e.target.value
    })
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  answer() {
    var data = {
      body: this.state.answer,
      name: this.state.nickname,
      email: this.state.email
    };

    axios.post(`/qa/answer/${this.props.question.question_id}`, data)
    .then((response) => {
      console.log('answer has been posted')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="qModal qContent" id="qModal">
        <h3>Submit Your Answer</h3>
        <h5>About the {this.props.product.name}: {this.props.question.question_body}</h5>
        <div>Your Answer*: <input value={this.state.answer} placeholder="type here" size="50" onChange={this.onAnswerChange}></input></div>
        <div>What is your nickname*? <input placeholder="Example: jack543!" value={this.state.nickname} onChange={this.onNameChange}></input></div>
        <div>For privacy reasons, do not use your full name or email address</div>
        <div>Your email*: <input placeholder="Example: jack@email.com" value={this.state.email} size="50" onChange={this.onEmailChange}></input></div>
        <div>For authentication reasons, you will not be emailed</div>

        <div className="qaModalToggle"><button className="qaModalToggle" onClick={this.onClose}>Submit</button></div>
      </div>
    )
  }
}

export default AddAModal;