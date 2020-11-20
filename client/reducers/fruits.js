import { SET_QUIZ } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ:
      return action.quiz
    default:
      return state
  }
}

export default reducer
