import React from 'react'
import '../styles/FormStyle.css'
const Form = () => {
  return (
    <div className='form'>
        <form>
         <label>Your Name</label>
         <input type='text'></input>
         <label>Email</label>
         <input type='text'></input>
         <label>Subject/Question</label>
         <input type='text'></input>
         <label>Details</label>
         <textarea rows='6' placeholder='explain your question shortly' />
         <button className='btn'>Submit</button>
        </form>
    </div>
  )
}
export default Form