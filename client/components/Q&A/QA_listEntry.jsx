import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class QA_listEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 2,
      answers: Object.values(this.props.item.answers),
      counter: 0
    }
    this.lmaClick = this.lmaClick.bind(this);
  }



  componentDidMount() {

  }

  lmaClick(e) {

    if (this.state.counter % 2 === 0) {
      this.setState({
        limit: 10
      })
      e.target.innerText = 'Collapse Answers';
      this.state.counter++;
    } else {
      this.setState({
        limit: 2
      })
      e.target.innerText = 'Load More Answers';
      this.state.counter++;
    }
  }


  render() {
    if (this.state.answers.length > 2) {
      return (
        <div>
        <p className="questionBody">Q: {this.props.item.question_body}</p>
        <div>{this.state.answers.slice(this.state.offset, this.state.limit).map(answer =>
          <div><p>A: {answer.body}</p> <span className="lma">by {answer.answerer_name}, {moment(answer.date).format('MMM Do YYYY')}</span></div>
          )}</div>
        <div className="lma" onClick={this.lmaClick}>Load More Answers</div>
        </div>
      )
    } else {
      return (
        <div>
        <p className="questionBody">Q: {this.props.item.question_body}</p>
        <div>{this.state.answers.map(answer =>
          <div><p>A: {answer.body}</p> <span className="lma">by {answer.answerer_name}, {moment(answer.date).format('MMM Do YYYY')}</span></div>
          )}</div>
        </div>
      )
    }
  }
}

export default QA_listEntry;