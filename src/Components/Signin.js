import React,{useState} from "react";
import './Signin.css';
import Navbar from './Navbar.js';




function Signin() {
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    if (password !== confPassword) {
      console.log("password Not Match");
    } else {
      console.log("Form submitted successfully")
      
    }
    e.preventDefault();
  }


    return (
      <div className="signup">
        <Navbar />
        
        <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h3> Sign-up Form </h3>
          <label >
            Name:
          </label><br />
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
          <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <label>
            Confirm Password:
          </label><br />
          <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
          <label >
          </label><br />
          <input type="submit" value="Submit" />
        </form>
      </header>   
      </div>
    );
  }
  
  export default Signin;