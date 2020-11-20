import request from 'superagent'


//const rootUrl = '/api/v1'

export function getQuiz() {
  return request.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple')
  
    .then(res => {
      console.log(res.body.results)
        return res.body.results
    })

}

// export function fetchQuiz(dispatch){

//       dispatch(requestQuiz())

//       return request
//          .get('https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple')
//          .then(res =>{
//             // dispatch(receiveQuiz(res.body))
            
//             console.log('api response', res.text)
//          })
//          .catch( err =>{
//            console.log(err)

//            dispatch(showError(err.message))


//          })

// }