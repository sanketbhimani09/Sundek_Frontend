// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './LoginPage.css';

const Forgot = () => {
  const [userName, setUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (!userName || !newPassword || !repeatPassword) {
      showError("Please provide username, new password, and repeat password.");
      return;
    }

    if (newPassword !== repeatPassword) {
      showError("New password and repeat password do not match.");
      return;
    }

    try {
      const checkResponse = await fetch(`https://sundek-backend.onrender.com/login/${userName}`);
      if (!checkResponse.ok) {
        throw new Error("Username does not exist. Please enter a valid username.");
      }

      const response = await fetch(`https://sundek-backend.onrender.com/login/${userName}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password: newPassword,userName: userName})
      });

      if (!response.ok) {
        throw new Error("Failed to change password. Please try again later.");
      }

      showSuccess("Password changed successfully.");
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
      title: "Password Change Successful!",
      text: message,
      icon: "success"
    });
  };

  return (
    <div className="login-page-container">
      <div className="container" style={{ height: "78.3vh", marginTop: "0px" }}>
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container" style={{height:"60vh"}}>
            <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
            <h1 className="opacity">Forgot</h1>
            <form>
              <input type="text" placeholder="USERNAME" onChange={(e) => setUserName(e.target.value)} />
              <input type="password" placeholder="NEW PASSWORD" onChange={(e) => setNewPassword(e.target.value)} />
              <input type="password" placeholder="REPEAT PASSWORD" onChange={(e) => setRepeatPassword(e.target.value)} />
              <button className="opacity" onClick={handlePasswordChange}>SAVE</button>
            </form>
          </div>
          <div className="circle circle-two"></div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
