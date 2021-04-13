import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>HELLO</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));