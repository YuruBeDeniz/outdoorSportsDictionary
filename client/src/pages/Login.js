import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleName = e => setName(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const requestBody = {name, password};
    axios.post('/api/auth/login', requestBody)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      })
  }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type='text' value={name} onChange={handleName} />

      <label>Password:</label>
      <input type='password' value={password} onChange={handlePassword} />

      <button type='submit'>Login</button>
    </form>

    {errorMessage && <h5>{errorMessage}</h5>}

    <h3>Don't have an account?</h3>
    <Link to='/signup'>Sign Up</Link>
    </>
  )
}
