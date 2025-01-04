import React from 'react'
import "./Signup.css"
import { RxCross1 } from "react-icons/rx";

const SignUp = () => {
  return (
    <div className='main-div'>
      

       <form class="form-container">
        <div className='cross'>
        <RxCross1 />
        </div>
       
    <div class="form-group">
      <label for="email" class="form-label">Your email</label>
      <input type="email" id="email" class="form-input" placeholder="indranil@gmail.com" required />
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Your password</label>
      <input type="password" id="password" class="form-input" required />
    </div>
    <div class="form-checkbox-group">
      <input id="remember" type="checkbox" value="" class="form-checkbox" required />
      <label for="remember" class="checkbox-label">Remember me</label>
    </div>
    <button type="submit" class="form-button">Submit</button>
  </form>
    </div>
  )
}

export default SignUp
