import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QA_search from './QA_search.jsx';
import QA_list from './QA_list.jsx';
import AddQModal from './AddQModal.jsx';

class QandA_app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.currentItem,
      questions: [],
      defaultq4: [],
      addQ: false,
      searched: []
    }
    this.render4Q = this.render4Q.bind(this);
    this.showModal = this.showModal.bind(this);
    this.maqClick = this.maqClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    var productId = this.state.selected['id'];
    axios.get(`/questions/${productId}`)
    .then((response) => {
      this.setState({
        questions: response.data.results
      })
    })
    .then(() => {
      this.render4Q();
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render4Q() {
    var allQ = this.state.questions;
    var fourQ = allQ.slice(0,4);
    this.setState({
      defaultq4: fourQ
    })
  }

  showModal(e) {
    this.setState({
      addQ: !this.state.addQ
    });
  }

  maqClick(e) {
    this.setState({
      defaultq4: this.state.questions
    })
    var element = document.getElementById('maq');
    element.classList.add('maq_hide');
  }

  onSearch(term) {
    if (term === '') {
      this.render4Q();
    } else {
      var questions = this.state.questions;
      var searchedQ = [];
      for (var i = 0; i < questions.length; i++) {
        var question = questions[i].question_body;
        if (question.includes(term)) {
          searchedQ.push(questions[i]);
        }
      }
      this.setState({
        defaultq4: searchedQ
      })
    }

  }



  render() {
    return (
      <div className="questionsandanswers">
        <h1><div>Questions <span>&amp;</span> Answers</div></h1>
        <div className="qasearch"><QA_search onSearch={this.onSearch}/></div>
        <div className="qalist"><QA_list qa={this.state.defaultq4} selected={this.state.selected}/></div>
        <div><button id="maq" onClick={this.maqClick}>More Answered Questions</button><button onClick={e => { this.showModal(); }} className="qaModalToggle">Add A Question +</button></div>
        <div className="addqmodal"><AddQModal show={this.state.addQ} product={this.state.selected} onClose={this.showModal}/></div>
      </div>
    )
  }
}

export default QandA_app;