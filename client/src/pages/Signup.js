import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="formContainer">
          <h1>Welcome!</h1>
          <input className="inpt" placeholder="Name..." type="text" id="username" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
          <input className="inpt" placeholder="Password..." type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          <button className="btn btn-secondary">Sign up</button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
