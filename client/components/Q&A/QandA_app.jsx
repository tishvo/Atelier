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
  }

  componentDidMount() {
    var productId = this.state.selected['id'];
    // this.setState({
    //   selectedID: productId
    // })
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

  render() {
    return (
      <div>
        <div>Questions <span>&amp;</span> Answers</div>
        <div><QA_search /></div>
        <div><QA_list qa={this.state.defaultq4}/></div>
        <div>Load more answers</div>
        <div><button>More Answered Questions</button><button onClick={e => { this.showModal(); }}>Add A Question +</button></div>
        <div><AddQModal show={this.state.addQ} product={this.state.selected} onClose={this.showModal}/></div>
      </div>
    )
  }
}

export default QandA_app;