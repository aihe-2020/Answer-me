import { TestScheduler } from 'jest'
import nock from 'nock'
import {getQuiz} from './question'

describe ('test getQuiz',() => {

  const fakeQuizs =[{question:'why mongooses chanllenge lions'},{question:'why dogs bully geese'}]
 // const scope =nock('https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple')
  const scope =nock('https://opentdb.com')

       .get('/api.php?amount=10&difficulty=hard&type=multiple')
       .reply(200,fakeQuizs)

    test ('return quizs from api' ,()=> {

         expect.assertions(2)
         return getQuiz().then(quizs => {
             expect(quizs).toEqual(fakeQuizs)
             expect(scope.isDone()).toBe(true)
              return null

         })
    })
})