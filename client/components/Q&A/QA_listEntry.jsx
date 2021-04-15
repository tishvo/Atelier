import React from 'react';
import ReactDOM from 'react-dom';

class QA_listEntry extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <div>Q: Is a hotdog a sandwich?</div>
      <div>A: No</div>
      </div>

    )
  }
}

export default QA_listEntry;