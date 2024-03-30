import React, { useContext, useState } from 'react';
import AppContext from './AppContext';
import '../css/Auth.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register(){
  const {dispatch} = useContext(AppContext);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigateHomePage = useNavigate();
  const onChangeHandle = (e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value});
  }
  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault(); // ấn login page ko bị reload
      const option = {
        method: "post",
        url: "/api/v1/auth/register",
        data: userInput
      }
      const response = await axios(option);
      const {token, userName} = response.data.data;
      localStorage.setItem("token", token);
      dispatch({type: "CURRENT_USER", payload: {userName}});
      navigateHomePage("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  }
  return (
    <section className="auth-container">
      <form className="auth-form" onSubmit={onSubmitHandle}>
        <h2>Register new account</h2>
        {errorMessage && ((Array.isArray(errorMessage)) ? 
          (errorMessage.map((err) => (
            <div className='error-message'>Error: {err}</div>
          ))) : (
            <div className='error-message'>Error: {errorMessage}</div>
          )
        ) }
        <input type="name" name="name" id="" required placeholder="Name"
        value={userInput.name}
        onChange={onChangeHandle}
        />
        <input type="email" name="email" id="" required placeholder="Email"
        value={userInput.email}
        onChange={onChangeHandle}
        />
        <input type="password" name="password" required placeholder="Password"
        value={userInput.password}
        onChange={onChangeHandle}
        />
        <button className="btn" type="submit">Register</button>
      </form>
    </section>
  )
} 