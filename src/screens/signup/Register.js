import React, { useState, useContext, useEffect } from "react";
import { UsersContext } from "../../contexts/UsersContext"
import { Link } from "react-router-dom";
import "./Register.css";
import bg from "../../images/my-wallet.png";


const Register = ({ location, history }) => {
  const { registerUser, userInfo } = useContext(UsersContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    const newuser = {
      name,
      email,
      password,
    };
    registerUser(newuser);
  }
  return (
    <section id="login-page" style={{ backgroundImage: bg }} >
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="sign-in-container">
              <div className="signUp-form shadow">
                <h2 className="text-center pb-4">Create My Wallet Account</h2>
                <form autoComplete="off" className="mt-4" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name} onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn sign-in-btn w-100 text-white"
                    >
                      Sign UP
                    </button>
                  </div>
                  <div className="mt-3">
                    <span>Have Account</span>
                    <span>
                      <Link
                        className="m-3 text-decoration-none text-info"
                        to="/signin"
                      >
                        sign in
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
