import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
 

export default function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate();

  const handleName = e => setName(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const requestBody = {name, password}
    axios.post('/api/auth/signup', requestBody)
     .then(response => {
        navigate('/login');
     })
     .catch(err => {
        const errorDescription = err.response.data.message
        setErrorMessage(errorDescription)
     })
  };

  return (
    <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit} >
    <label>Name:</label>
    <input value={name} type='text' onChange={handleName} />
    <br />
    <label>Password:</label>
    <input value={password} type='password' onChange={handlePassword} />
    <br />
    <button type='submit'>Sign Up</button>
    </form>

    {errorMessage && <h5>{errorMessage}</h5>}

    <h3>Already have an account?</h3>
    <Link to='/login'>Login</Link>
    </>
  )
}
