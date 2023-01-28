import React, { useState, useEffect,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NoteContext from '../context/notes/noteContext'

function NavBar() {
  const context = useContext(NoteContext);
  const {isLoading} = context.Loading;
  const [display, setDisplay] = useState("block");
  const [displayforlogout, setDisplayforlogout] = useState("block");

  let Navigate = useNavigate();
  // eslint-disable-next-line
  const handleOnChange = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    Navigate("/login");
  };

  useEffect(() => {
    setDisplay(!localStorage.getItem("token") ? "block" : "none");
    setDisplayforlogout(!localStorage.getItem("token") ? "none" : "block");
  }, [handleOnChange, isLoading]);

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"black"}}>
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" style={{color:"white"}} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{color:"white"}} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link
                className="btn bg-white mx-1"
                style={{ display: `${display}` }}
                to="/login"
                role="button"
              >
                LogIn
              </Link>
              <Link
                className="btn bg-white mx-1"
                style={{ display: `${display}` }}
                to="/signup"
                role="button"
              >
                SignUp
              </Link>
              <Link
                className="btn bg-white mx-1"
                style={{ display: `${displayforlogout}` }}
                onClick={handleOnChange}
                to="/signup"
                role="button"
              >
                LogOut
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
