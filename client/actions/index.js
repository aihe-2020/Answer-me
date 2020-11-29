import request from 'superagent'
import { getQuiz } from '../apis/question'

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const SET_ERROR = 'SET_ERROR'

// export function setError(message){

//    return {type:SET_ERROR, message}
// }

export function setQuiz (quizData) {
  return {
    type: SET_QUESTIONS,
    quizData
  }
}

export function fetchQuiz () {

  return dispatch => {
       getQuiz()
      .then(quizData => {
        dispatch(setQuiz(quizData))
     // .catch (err =>dispatch(setError(err)))
       return null
       
      })
  }

}
