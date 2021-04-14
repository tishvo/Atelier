import React from 'react';
import ReactDOM from 'react-dom';
import QA_listEntry from './QA_listEntry.jsx';

class QA_list extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <QA_listEntry />
        <QA_listEntry />
      </div>

    )
  }
}

export default QA_list;