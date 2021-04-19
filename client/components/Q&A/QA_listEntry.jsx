import React from 'react';
import ReactDOM from 'react-dom';

class QA_listEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      two: []
    }
    this.parseAnswer = this.parseAnswer.bind(this);
    this.parseTwo = this.parseTwo.bind(this);
  }

  parseAnswer() {
    var answersArray = Object.values(this.props.item.answers);
    this.setState({
      answers: answersArray
    });
  }

  parseTwo() {
    var answersArray = Object.values(this.props.item.answers);
    var two = answersArray.slice(0,2);
    this.setState({
      answers: two,
      two: two
    });
  }

  componentDidMount() {
    this.parseTwo();
  }

  render() {
    return (
      <div>
      <p>Q: {this.props.item.question_body}</p>
      <div>{this.state.answers.map(answer =>
        <div><p>A: {answer.body}</p> by {answer.answerer_name}, {answer.date}</div>
        )}</div>
      </div>
    )
  }
}

export default QA_listEntry;