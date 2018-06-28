import React, { Component } from 'react' //makes react functions available in this file
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json') //load JSON data into quizData

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = {quiz_position: 1};
  }

  showNextQuestion() {
    this.setState(prevState => {
      return {quiz_position: prevState.quiz_position +1}
    });
  }

  render () {
    const isQuizEnd = this.state.quiz_position-1 === quizData.quiz_questions.length;
    return (
      <div>
      {isQuizEnd?
        <QuizEnd/>
        :
        <QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position - 1]}
                      showNextQuestionHandler = {this.showNextQuestion.bind(this)}/>
      }
      </div>
    );
  }
}

export default Quiz
