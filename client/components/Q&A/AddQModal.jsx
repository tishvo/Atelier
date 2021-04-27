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
    e.preventDefault();
    this.props.onClose && this.props.onClose(e);
    this.askQuestion();
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

        <form onSubmit={this.onClose}>
          <label>
            Your Question*:
            <input className="tv_modal_field tv_input" value={this.state.question} onChange={this.onQuestionChange} size="52" required/>
          </label>
          <div>
          <label>
            Your Nickname*:
            <input className="tv_input" placeholder="Example: jackson11!" size="51" onChange={this.onNameChange} required/>
          </label>
          </div>
          <div className="tv_modal_fyi tv_modal_field">For privacy reasons, do not use your full name or email address</div>
          <label>
            Your Email*:
            <input className="tv_input" placeholder="Why did you like the product or not?" size="55" onChange={this.onEmailChange} required/>
          </label>
          <div className="tv_modal_fyi tv_modal_field">For authentication reasons, you will not be emailed</div>
          <div className="tv_modal_field tv_required">*Required</div>
          <input className="tv_modal_button" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default AddQModal;
