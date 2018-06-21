import React, { Component } from 'react' //makes react functions available in this file

class QuizQuestionButton extends Component {
  render () {
    return (
      <li>
        <button>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton
