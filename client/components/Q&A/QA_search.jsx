import React from 'react';
import ReactDOM from 'react-dom';


class QA_search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      search: e.target.value
    })

    if (e.target.value.length >= 3) {
      this.onSubmit()
    } else if (e.target.value.length === 0) {
      this.onSubmit()
    }
  }

  onSubmit() {
    this.props.onSearch(this.state.search)
  }

  render() {
    return (
      <div>
        <input placeholder="Have a question? Search for answers..." value={this.state.search} onChange={this.onChange} size="125"></input>
      </div>
    )
  }
}

export default QA_search;