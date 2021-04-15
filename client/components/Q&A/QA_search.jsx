import React from 'react';
import ReactDOM from 'react-dom';


class QA_search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input placeholder="Have a question? Search for answers..." value={this.state.search} onChange={this.onChange} size="125"></input>
        <button>search</button>
      </div>
    )
  }
}

export default QA_search;