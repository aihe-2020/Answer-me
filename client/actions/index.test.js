import {fetchQuiz,setQuiz,SET_QUESTIONS} from './index'

import {getQuiz} from '../apis/question'


jest.mock( '../apis/question',()=>( {

    getQuiz: jest.fn()

}))

const fakeDispatch = jest.fn()

describe( 'fetchQuiz',() => {
    //const fakeQuizs = [{question:'dogs interrupt roosters fighting'},{question:'Lucy would feel sorry for what she did'}]

  describe( 'when api works',()=> {
    const fakeQuizs = [{id:1,question:'dogs interrupt roosters fighting'}]


     beforeAll( ()=> {
       jest.clearAllMocks()
       getQuiz.mockImplementation( ()=> Promise.resolve(fakeQuizs))
     })

     test ('call getQuiz api',()=> {
       fetchQuiz()(fakeDispatch)
       expect(getQuiz).toHaveBeenCalled()
     })

     test ( 'dispatch setQuiz action with new quiz',()=> {
       expect(fakeDispatch.mock.calls[0][0].type).toEqual(SET_QUESTIONS)
       expect(fakeDispatch.mock.calls[0][0].quizData[0].id).toEqual(1)

     })

  })
  
  // describe ( 'when getting api fails ',()=> {
  //    beforeAll(() => {
  //       fetchQuiz()(fakeDispatch)
  //    })

  //    test ('dispatch error msg if the api call failed',() => {
  //       expect (fakeDispatch.mock.calls[0][0]).toEqual(SET_ERROR)

  //    })

  // })


})

