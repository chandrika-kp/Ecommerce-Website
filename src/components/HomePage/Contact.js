import React from 'react'
import '../../App.css'

const Contact = () => {
  return (
    <div >
      <iframe
        className='map'
        title="Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.79931292707!2d79.77232830649972!3d11.936376279509226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1683875762931!5m2!1sen!2sin" />
      <form
        className='container'
        action="https://formspree.io/f/mvonykzq"
        method="POST"
      >
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" autoComplete='off' required/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label" >Enter your Query</label>
          <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" autoComplete='off' required></textarea>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact
