import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="formContainer">
          <h1>Welcome!</h1>
          <input className="inpt" placeholder="Email..." type="email" id="username" value={userName} onChange={(e)=> setUserName(e.target.value)} required/>
          <input className="inpt" placeholder="Password..." type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
          <button className="btn btn-secondary">Log in</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
