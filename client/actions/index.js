import request from 'superagent'
import { getQuiz } from '../apis/fruits'

export const SET_QUESTIONS = 'SET_QUESTIONS'

export function setQuiz (quizData) {
  return {
    type: SET_QUESTIONS,
    quizData
  }
}

export function fetchQuiz () {

  return dispatch => {
    return getQuiz()
      .then(quizData => {
        dispatch(setQuiz(quizData))
        return null
      })
  }
}

