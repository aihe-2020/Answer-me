import React from 'react'
import {connect} from 'react-redux'

const QuizList = () => (

   <div >

       <h2 > hello working </h2>
   </div>


)

function mapStateToProps (globalState) {
    return {
      fruits: globalState.fruits
    }
  }
  
  export default connect(mapStateToProps)(QuizList)

