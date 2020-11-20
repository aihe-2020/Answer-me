import request from 'superagent'
import {requestQuiz,receiveQuiz} from './actions'


const rootUrl = '/api/v1'

export function getFruits () {
  return request.get(rootUrl + '/fruits')
    .then(res => {
      return res.body.fruits
    })
}

export function fetchQuiz(dispatch){

      dispatch(requestQuiz())

      return request
         .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple')
         .then(res =>{
             dispatch(receiveQuiz(res.body))
            
            console.log("what is in api ",res)
         })
         .catch( err =>{
           console.log(err)

           dispatch(showError(err.message))


         })

}
