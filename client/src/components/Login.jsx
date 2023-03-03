import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn, goToCity }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [credentials, setCredentials] = useState({});


  const handleClick = (e) => {
    let credentials = {
      email: email,
      password: password,
    }
    e.preventDefault();
    post(credentials)
  }

  const post = () => {
    setLoggedIn(true)
    goToCity(0);
  }

  // const post = (creds) => {
  //   axios.post('http://127.0.0.1:3000/login', creds)
  //   .then((res) => {
  //     setLoggedIn(true);
  //     console.log('res', res)
  //   })
  //   .catch((err) => console.log(err))
  // }

  // sign up -> post to users
  // login -> get from users, check password matches for email, set logged in

  return (
    <div className="login">
      <img src="./assets/sailboat.jpg"/>
      <div className="title">Windward Stats</div>
      <form>
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Password
          <input type="text" />
        </label>
        <button type="submit" onClick={handleClick} >Login</button>
        <div className="makeAccount">
          <div className="noAccount">Don't have an account?</div>
          <div className="sign-up">Sign up</div>
        </div>
      </form>
    </div>
  )

}

export default Login;