// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './LoginPage.css'; // Import your CSS file for styling

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userName || !password) {
      showError("Please provide both username and password.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3030/forgot', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, password })
      });

      if (!response.ok) {
        throw new Error("Failed to log in. Please try again later.");
      }

      const res = await response.json();

      if (!res || !res.adminId) {
        throw new Error("Invalid username or password. Please try again.");
      }

      localStorage.setItem('adminId', JSON.stringify(res.adminId));
      showSuccess("You have successfully logged in.");
      navigate('/');
    } catch (error) {
      showError(error.message);
    }
  };

  const showError = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  };

  const showSuccess = (message) => {
    Swal.fire({
      title: "Login Successful!",
      text: message,
      icon: "success"
    });
  };

  return (
    <div className="login-page-container">
      <div className="container" style={{ height: "78.3vh", marginTop: "0px" }}>
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
            <h1 className="opacity">LOGIN</h1>
            <form>
              <input type="text" placeholder="USERNAME" onChange={(e) => setUserName(e.target.value)} />
              <input type="password" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} />
              <button className="opacity" onClick={handleLogin}>SUBMIT</button>
              <div>
                <Link to="/Login/Forgot" style={{color:"orange",fontSize:15,border:"1px solid orange",padding:"2px",borderRadius:"3px"}}>
                  Forgot Password
                </Link>
              </div>
            </form>
          </div>
          <div className="circle circle-two"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
