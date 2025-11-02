import React from 'react'
import Header from '../component/Header.jsx'
import FeedbackForm from '../component/FeedbackForm.jsx'
import Card from '../component/Card.jsx'
import './App.css'
const App = () => {
  return (
    <div>
      <Header />
      <FeedbackForm />
      <div className='card-container'>
      <Card name="Aditya Kumar" course="ReactJS" feedback="Great course! Learned a lot." />
       <Card name="Ram Charan" course="JavaScript" feedback="Very informative and well-structured." />
        <Card name="Shyam Singh" course="CSS" feedback="Loved the practical examples." />
        </div>
    </div>
  )
}

export default App
