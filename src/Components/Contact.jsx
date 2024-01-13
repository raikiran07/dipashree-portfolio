import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xkndwgaz");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
      <div className="page border rounded-lg" id="contact">
        
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto md:max-w-lg">
        <label htmlFor="email" className="label-text text">
          Email Address
        </label> <br/>
        <input
          id="email"
          type="email" 
          name="email"
          className="text bg-gray"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <br/>
        <label htmlFor="message" className="message-field label-text text">
          Message
        </label> <br/>
        <textarea
          id="message"
          name="message"
          className="text bg-gray"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <br/>
        <button type="submit" disabled={state.submitting}
        className="submit-btn border border-black  text-white"
        >
          Submit
        </button>
      </form>
      
  
      </div>
    )
}

export default Contact