import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'
import { fetchQuiz } from '../apis/fruits'
import QuizList from './QuizList'


export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
    
    this.props.dispatch(fetchQuiz())
  }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
