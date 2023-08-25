import React from 'react'
import SideBar from '../components/SideBar.js'
import ListQuiz from '../components/ListQuiz.js'


const Questionnair = ({questions}) => {
  return (
    <div>
        <SideBar text = "Questionnaire">
      <ListQuiz questions={questions}/>
        </SideBar>
    </div>
  )
}

export default Questionnair