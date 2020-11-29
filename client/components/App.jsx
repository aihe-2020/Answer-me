import React from 'react'
import { connect } from 'react-redux'

import { fetchQuiz } from '../actions/index'



export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    
    this.props.dispatch(fetchQuiz())
  }

 answersArray (correct, incorrect) {
   console.log(correct)
   incorrect.push(correct)
   console.log(incorrect)
   return incorrect
 }

  render () {
    return (
      <div>
        <h1>Answer Me!</h1>
        <ul> 
           {this.props.quizs.map((question, index) => (
            <li key={index}>{question.question} 
         
             {this.answersArray(question.correct_answer, question.incorrect_answers)
             
             }
            </li>
          
          ))}
        </ul>
      </div>
    )
  }
}



function mapStateToProps (globalState) {
  return {
    quizs: globalState.questions
  }
}

export default connect(mapStateToProps)(App)


  //STRIPS HTML ENTITIES FROM CODE. CALL THIS WHEN YOU STRIP OUT DATA INTO VARIABLES LIKE I DID WITH THE QUESTION VARIABLE BELOW. HOW THIS ALL WORKS IS A MYSTERY TO ME AND IT IS SLIGHTLY HACKY. ESSENTIALLY USES THE BROWSER's DECODER TO DO THE WORK FOR YOU AND THEN CLAIMS THE RESULT BACK FOR YOUR NEFARIOUS PURPOSES

//   decodeHTML(html) {
//     var txt = document.createElement('textarea');
//     txt.innerHTML = html;
//     return txt.value;
//   }

//A LITTLE PART OF MY COMPONENT: RENDER WHERE THE MAGIC HAPPENS & RETURN THAT SHOWS IT

// render() {
//   let question = this.decodeHTML(this.props.question) 
//       return(
//         <h1>{question}</h1>
//       )
// }