import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "../pages/Login";
import '../style/Login.css'
function Forget() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [login, setLogin] = useState(true);
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
      setLogin(!login);
      setFlag(false);
    }
  }
  function handleClick() {
    setRegistration(!registration);
  }

  return (
    
    <div >
      {login ? (
        <form onSubmit={handleLogin} className="box">
          <h3 className="heading">Forget password</h3>
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
            <label>Re-Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Conform-Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div><br/>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
           Conform
          </button><br/>
          

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Login />
      )}
    </div>
    
  );
}

export default Forget;