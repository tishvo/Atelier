import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PhotoModal from './PhotoModal.jsx';

class AddAModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photo: false
    }
    this.onClose = this.onClose.bind(this);
    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.answer = this.answer.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  onClose(e) {
    e.preventDefault();
    this.props.onClose && this.props.onClose(e);
    this.answer();
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

  showModal(e) {
    this.setState({
      photo: !this.state.photo
    });
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="qModal qContent" id="qModal">
        <h3>Submit Your Answer</h3>
        <h5>about the {this.props.product.name}: {this.props.question.question_body}</h5>

        <form onSubmit={this.onClose}>
          <label className="tv_modal_field">
            Answer:*
            <input className="tv_modal_field tv_input" value={this.state.answer} placeholder="Type your answer here" size="55" onChange={this.onAnswerChange} required/>
          </label>
          <div>
            <label className="tv_modal_field">
              Nickname:*
              <input className="tv_input" placeholder="Example: jack543!" value={this.state.nickname} onChange={this.onNameChange} required size="53"/>
            </label>
          </div>
          <div className="tv_modal_fyi tv_modal_field">For privacy reasons, do not use your full name or email address</div>
          <label className="tv_modal_field">
            Email:*
            <input className="tv_input" placeholder="Example: jack@email.com" value={this.state.email} size="57" onChange={this.onEmailChange} required/>
          </label>
          <div className="tv_modal_fyi tv_modal_field">For authentication reasons, you will not be emailed</div>
          <div className="tv_modal_field tv_required">*Required</div>
          <div><button className="tv_modal_button" type="button" onClick={e => { this.showModal(); }}>+ photos</button></div>
          <div><PhotoModal show={this.state.photo} onClose={this.showModal}/></div>
          <input type="submit" className="tv_modal_button" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default AddAModal;

/*


        <div>Your Answer*: <input value={this.state.answer} placeholder="type here" size="50" onChange={this.onAnswerChange}></input></div>
        <div>What is your nickname*? <input placeholder="Example: jack543!" value={this.state.nickname} onChange={this.onNameChange}></input></div>
        <div>For privacy reasons, do not use your full name or email address</div>
        <div>Your email*: <input placeholder="Example: jack@email.com" value={this.state.email} size="50" onChange={this.onEmailChange}></input></div>
        <div>For authentication reasons, you will not be emailed</div>
        <div className="qaModalToggle"><button className="qaModalToggle" onClick={e => { this.showModal(); }}>Add photos here</button></div>
        <div><PhotoModal show={this.state.photo} onClose={this.showModal}/></div>

        <div className="qaModalToggle"><button className="qaModalToggle" onClick={this.onClose}>Submit</button></div>
*/