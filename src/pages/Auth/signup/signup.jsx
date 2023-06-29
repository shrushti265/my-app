import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="signup_page">
    <form action="" className="signup_form">
        <div className="signup_form_text">Signup</div>
        <input type="text" placeholder="Name" name="" />
        <input type="text" placeholder="Email" name="" />
        <input type="password" placeholder="create password" name="" />
        <input type="password" placeholder="confirm password" name="" />
        <input type="submit" value= "Signup" className="button primary_btn"/>
        <div className="signup_link">
        <div className="small_text">Already have a account?</div>
        <Link to = "/login" ><span className="signup_text">Login</span></Link> 
        </div>
        </form>



</div>
  )
}

export  {Signup}
