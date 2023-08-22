import React from 'react'
import SideBar from '../components/SideBar.js'
import UpdatedQuestion from '../components/UpdatedQuestion.js'

const Questionnair = ({questions}) => {
  return (
    <div>
        <SideBar text = "Questionnaire">
        <UpdatedQuestion questions={questions} />
        </SideBar>
    </div>
  )
}

export default Questionnair