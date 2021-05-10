import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import bg from "../../images/my-wallet.png";

const Register = () => {
  return (
    <section id="login-page" style={{ backgroundImage: bg }}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="sign-in-container">
              <div className="signUp-form shadow">
                <h2 className="text-center pb-4">Create My Wallet Account</h2>
                <form autoComplete="off" className="mt-4">
                  <div className="form-group">
                    <label htmlFor="username">User name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn sign-in-btn w-100 text-white"
                    >
                      Sign In
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
