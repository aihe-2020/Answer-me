import request from 'superagent'


export function getQuiz() {
  return request.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple')
  
    .then(res => {
      console.log(res.body.results[3].question)
        return res.body.results
    })

}