import React from 'react';
import ReactDOM from 'react-dom';
import QA_listEntry from './QA_listEntry.jsx';

class QA_list extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.qa !== prevProps.qa) {

      this.render();
    }
  }

  render() {
    return (
      <div className="qaList">
        {this.props.qa.map((item, index) =>
          <QA_listEntry key={index} item={item} selected={this.props.selected}/>
          )}
      </div>
    )
  }
}

export default QA_list;