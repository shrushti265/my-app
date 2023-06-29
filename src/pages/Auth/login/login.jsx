import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div>
        <from action="" className="login_form">
            <div className='login_form_text'>
                Login
            </div>
            <input type='text' placeholder='xyz@abc.com' name=''/>
            <input type='text' placeholder='user password' name=''/>
            <input type='submit' value="login" className='button primary_btn' />
            <div className='signup_link'>
                <div className='small-text'>Not a member?</div>
                <Link to = "./signup"><span className='signup_text'>Signup</span></Link>
            </div>
        </from>
    </div>
    </>
  )
}

export  {Login}
