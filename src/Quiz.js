import React, { Component } from 'react' //makes react functions available in this file
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json') //load JSON data into quizData

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = {quiz_position: 1};
  }

  render () {
    return (
      <div>
        <QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position - 1]}/>
      </div>
    );
  }
}

export default Quiz
