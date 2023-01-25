import React, { useState } from "react";

export default function userdata() {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setfullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleTextChange = (e) => {
    setMessage(e.target.value);
  };
  const SubmitForm = () => {
    if(!fullName || !email || !password || !message){
        setError("All fields are required!")
    } else if(!email.includes('@')){
        setError('Email is invalid!')
    } else if(password.length<0){
        setError('Please enter the Password')
    } else if(password.length<8){
        setError('password length should be greater than 8!')
    }
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Full Name"
          onChange={handleNameChange}
          value={fullName}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePassChange}
          value={password}
        />
        <textarea
          cols="30"
          rows="10"
          onChange={handleTextChange}
          value={message}
        ></textarea>
        <button onClick={SubmitForm}> Submit Details</button>
      </form>
    </div>
  );
}
