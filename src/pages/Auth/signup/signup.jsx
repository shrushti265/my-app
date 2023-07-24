import React, { useState } from 'react'
import "./signup.css"
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import "./signup.css"

const Signup = () => {
  const [firstName, setFirstName] = useState("Shrushti")
  const [lastName, setLastName] = useState("yadav")
  const [email, setMail] = useState("shruy26@gmail.com")
  const [password, setPassword] = useState("1234")
  const Navigate = useNavigate()

  const signupHandler = async () => {
      const body = {
        email: email,
        password: password,
        lastName: lastName,
        firstName: firstName,
      }
      try {
        const response = await axios.post("/api/auth/signup", body )
        localStorage.setItem("token", response.data.encodedToken)
        setTimeout(() => {
          Navigate("/login")
        }, 1000);
        toast.success("Signup Successful")
      }catch (error) {
          console.error("Signup Failed")
      }
  }

  return (
    <div className="signup_page">
    <div className="signup_form">
        <div className="signup_form_text">Signup</div>
        <input 
        type="text" 
        placeholder="First Name" 
        name="" 
        onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="last Name" 
        name="" 
        onChange={(e) => setLastName(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="Email" 
        name=""
        onChange={(e) => setMail(e.target.value)} 
        />
        <input 
        type="password" 
        placeholder="create password" 
        name=""
        onChange={(e) => setPassword(e.target.value)}  
        />
        <button 
        type="submit" 
        value= "Signup" 
        className="button primary_btn"
        onClick={() => signupHandler()}
        >
          SignUp
        </button>
        <div className="signup_link">
        <div className="small_text">Already have a account?</div>
        <Link to = "/login" >
          <span className="signup_text">Login</span>
        </Link> 
        </div>
        </div>

</div>
  )
}

export  { Signup }
