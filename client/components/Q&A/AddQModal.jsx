import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddQModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: ''
    }
    this.onClose = this.onClose.bind(this);
    this.askQuestion = this.askQuestion.bind(this);
    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
    this.askQuestion()
  }

  askQuestion() {
    var data = {
      body: this.state.question,
      name: this.state.nickname,
      email: this.state.email,
      product_id: this.props.product.id
    };
    axios.post('/qa/ask', data)
    .then((response) => {
      console.log('question has been posted')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  onQuestionChange(e) {
    this.setState({
      question: e.target.value
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


  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="qModal qContent" id="qModal">
        <h3>Ask Your Question</h3>
        <h5>About the {this.props.product.name}</h5>
        <div>Your Question*: <input value={this.state.question} onChange={this.onQuestionChange} size="50"></input></div>
        <div>Your Nickname*: <input placeholder="Example: jackson11!" size="50" onChange={this.onNameChange}></input></div>
        For privacy reasons, do not use your full name or email address
        <div>Your Email*: <input placeholder="Why did you like the product or not?" size="50" onChange={this.onEmailChange}></input></div>
        For authentication reasons, you will not be emailed
        <div className="qaModalToggle"><button onClick={this.onClose}>Submit</button></div>
      </div>
    )
  }
}

export default AddQModal;