import React from 'react';
import '../css/Auth.css'

export default function Register(){
  return (
    <section className="auth-container">
      <form className="auth-form">
        <h2>Register new account</h2>
        <div className="error-message">Error: Your password is not correct</div>
        <input type="name" name="name" id="" required placeholder="Name"/>
        <input type="email" name="email" id="" required placeholder="Email"/>
        <input type="password" name="password" required placeholder="Password"/>
        <button className="btn" type="submit">Login</button>
      </form>
    </section>
  )
} 