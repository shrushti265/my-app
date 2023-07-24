import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import {toast} from 'react-toastify'

const Login = () => {
  const [email, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useAuth();
  
  console.log(auth)
  const navigate = useNavigate()

  const loginHandler = async () => {
    const body = {
      email: email,
      password: password
    }
      try {
        const response = await axios.post("/api/auth/login", body)
        if (response.data.encodedToken) {
          navigate("/");
          setAuth(() => ({
            token: response.data.encodedToken,
            isAuth: true,
            userName: response.data.foundUser.firstName,
          }))
        toast.success("Login Succesfull");
      }else {
        toast.error("Invalid UserID Passeord");
      }
    }catch (error) {
        toast.error("Login Failed");
      }
  }
  return (
    <>
      <div>
        <div action="" className="login_form">
          <div className="login_form_text">Login</div>

          <input 
          type="text" 
          placeholder="xyz@abc.com" 
          name="" 
          onChange={(e) => setMail(e.target.value)}
          />

          <input 
          type="text" 
          placeholder="user password" 
          name="" 
          onChange={(e) => setPassword(e.target.value)}
          />

          <button 
          className="button primary_btn" 
          onClick={() => loginHandler()}
          >
            Login

          </button>

          <div className="signup_link">
            <div className="small-text">Not a member?</div>
            <Link to="./signup">
              <span className="signup_text">Signup</span>
            </Link>
          </div>
      </div>
      </div>
    </>
  );
};

export { Login };
