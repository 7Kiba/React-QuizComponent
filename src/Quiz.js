import React, { Component } from 'react' //makes react functions available in this file

let quizData = require('./quiz_data.json') //load JSON data into quizData

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = {quiz_position: 1};
  }

  render () {
    return (
      <div>
        <div className="QuizQuestion">
          {quizData.quiz_questions[0].instruction_text}
        </div>
      </div>
    );
  }
}

export default Quiz
