import { useRef } from 'react'
import "./register.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick =async (e) =>{
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Password doesn't match!")
    }
    else{
      const user ={
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try{
        const res = await axios.post("http://localhost:8800/api/auth/register", user)
        navigate("/login");
      }catch(err){
        console.log(err)
      }
    }

     };

  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">SocialPulse</h3>
        <span className="loginDesc">
          Connect with friends and the world around you on SocialPulse.
        </span>
      </div>
      <div className="loginRight">
        <form className="loginBox" onSubmit={handleClick}>
          <input placeholder="Username" 
          ref={username} 
          className="loginInput" 
          required/>

          <input placeholder="Email" 
          ref={email} 
          className="loginInput" 
          type='email'
          required />

          <input placeholder="Password" 
          ref={password} 
          className="loginInput" 
          type='password'
          minLength="6"
          required />

          <input placeholder="Confirm Password" 
          ref={passwordAgain} 
          className="loginInput"  
          type='password'
          minLength="6"
          required />


          <button className="loginButton" type='submit'>Sign Up</button>
          <Link to="/login" style={{textDecoration:'none'}}>
           <button className="loginRegisterButton">
            Log into Account
          </button>
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register
