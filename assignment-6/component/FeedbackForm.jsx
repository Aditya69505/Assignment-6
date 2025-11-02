import React from 'react'

const FeedbackForm = () => {
    const [name, setName] = React.useState('')
    const[course, setCourse] = React.useState('')
    const[feedback, setFeedback] = React.useState('')

    const handle = (e) => {
        e.preventDefault();
        console.log({name, course, feedback});
        setName('');
        setCourse('');
        setFeedback('');

    }

    return (
        <div className='feed'>
   <form onSubmit={handle}>
      <input type="text"
       placeholder="Your Name" 
       value={name}
      onChange={(e) => setName(e.target.value)}
          required/>
        <br />
        <input type="text"
         placeholder="course name" 
            value={course}
        onChange={(e) => setCourse(e.target.value)} 
        
          required/>
        <br />
        <textarea 
        type="text"
        value={feedback}
        placeholder="Your Feedback"
        onChange={(e) => setFeedback(e.target.value)}
         
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>

    
  </form>
        </div>
  )
}

export default FeedbackForm
