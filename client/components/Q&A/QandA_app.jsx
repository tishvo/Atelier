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
      addQ: false
    }
    this.render4Q = this.render4Q.bind(this);
    this.showModal = this.showModal.bind(this);
    this.maqClick = this.maqClick.bind(this);
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



  render() {
    return (
      <div>
        <h1><div>Questions <span>&amp;</span> Answers</div></h1>
        <div><QA_search /></div>
        <div><QA_list qa={this.state.defaultq4} selected={this.state.selected}/></div>
        <div><button id="maq" onClick={this.maqClick}>More Answered Questions</button><button onClick={e => { this.showModal(); }} className="qaModalToggle">Add A Question +</button></div>
        <div><AddQModal show={this.state.addQ} product={this.state.selected} onClose={this.showModal}/></div>
      </div>
    )
  }
}

export default QandA_app;