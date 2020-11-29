import questions from './questions'
import {fetchQuiz, setQuiz} from '../actions/index'

describe('questions reducer' ,()=> {

      test ('initial state is empty array',() => {

          const state =questions(undefined,{type: '_INIT_'})
          expect(state).toEqual([])
        })

      test ( 'SET_QUESTIONS overwrite init state of questions' ,()=> {
           const initialQuizs =[{question:'wombat'},{question:'mongoose'}]
           const newQuiz = [{question:'apple'},{question:'peter pen'}]
           const action = setQuiz(newQuiz)
           const state = questions(initialQuizs,action) 

           expect(state).toEqual(newQuiz)

      })
  
})