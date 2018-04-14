import React from 'react';
import ReactDOM from 'react-dom';

class TodoDoneApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return "Hello, Todo... Done!"
  }
}

ReactDOM.render(
  <TodoDoneApp />,
  document.querySelector("#root")
)