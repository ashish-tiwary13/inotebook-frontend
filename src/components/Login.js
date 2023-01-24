import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {URL} from '../config/keys'


const Login = () => {
  
  const host=URL;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [visibility, setVisibility] = useState("eye-slash")
  const [textOrPassword, setTextOrPassword] = useState("password")
  const [error, setError] = useState("")
  let navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("username", json.username);
      // console.log(json.authToken);
      navigate("/");
    } else {
      setError("Please type again with correct credentials..");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const ChangeVisibility =(e)=>{
    e.preventDefault();
    setVisibility(visibility==="eye-slash"?"eye":"eye-slash");
    setTextOrPassword(textOrPassword==="password"?"text":"password");
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                      <img
                        type="image"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid"
                        alt="something"
                      />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                      <form onSubmit={onSubmit}>
                        <div className="container">
                          <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">
                            Login
                          </p>
                        </div>
                        <div className="form-outline mb-4 me-5">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            onChange={onChange}
                            value={credentials.email}
                          />
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <div className="d-flex justify-content-center">
                          <input
                            className="form-control form-control-lg"
                            type={`${textOrPassword}`}
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                          /><div className="m-3" style={{cursor:"pointer"}} onClick={ChangeVisibility}>
                          <i className={`fa-solid fa-${visibility}`}></i>
                          </div>
                          </div>
                          <label
                            className="form-label"
                            htmlFor="form1Example23"
                          >
                            Password
                          </label>
                        </div>
                        <div className="conatiner d-flex justify-content-center align-items-center">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg btn-block"
                          >
                            Sign in
                          </button>
                        </div>
                        <div className="conatiner d-flex justify-content-center align-items-center">
                          <div className="my-4">{error}</div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
