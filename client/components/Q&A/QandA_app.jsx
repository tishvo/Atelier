import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import QA_search from './QA_search.jsx';
import QA_list from './QA_list.jsx'

class QandA_app extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>Questions <span>&amp;</span> Answers</div>
        <div><QA_search /></div>
        <div><QA_list/></div>
        <div>Load more answers</div>
        <div><button>More Answered Questions</button><button>Add A Question +</button></div>
      </div>
    )
  }
}

export default QandA_app;