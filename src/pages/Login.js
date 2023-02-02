import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../pages/Home";
import '../style/Login.css'
function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);
  const [registration,setRegistration] =useState(true)

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  function handleClick() {
    setRegistration(!registration);
  }

  return (
    
    <div >
      {home ? (
        <form onSubmit={handleLogin} className="box">
          <h3 className="heading">LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div><br/>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button><br/>
          <p onClick={handleClick} className="forgot-password text-right">
                Don't have an account? Registration <a href="/register">Click here</a>
                
              </p><br/>
              <p onClick={handleClick} className="forgot-password text-right">
                Forget password  <a href="/forget"> Click here</a>
                
              </p>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
    
  );
}

export default Login;