import React from 'react'
import { connect } from 'react-redux'

import { fetchQuiz } from '../actions'



export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    
    this.props.dispatch(fetchQuiz())
  }

  render () {
    return (
      <div className='app'>
        <h1>Answer Me!</h1>
        <ul> 
           {this.props.quiz.map((question, index) => (
            <li key={index}>{question.question}  {question.correct_answer}</li>
          
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    quiz: globalState.questions
  }
}

export default connect(mapStateToProps)(App)
