import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import bg from "../../images/my-wallet.png";
import { UsersContext } from "../../contexts/UsersContext";
import useUsers from "../../hooks/useUsers";

const Login = ({ history }) => {
  const { Users } = useUsers("userInfo");
  const { loginUser, userInfo } = useContext(UsersContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      history.push("/home");
    }
  }, [userInfo, history, Users]);

  function handleSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };
    loginUser(loginuser);
  }

  return (
    <section id="login-page" style={{ backgroundImage: bg }}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="sign-in-container">
              <div className="signUp-form shadow">
                <h2 className="text-center pb-4">Login to My Wallet</h2>
                <form
                  autoComplete="off"
                  className="mt-4"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    <span className="ml-3"> New here</span>
                    <Link
                      to="/signup"
                      className="m-3
                    text-decoration-none text-info"
                    >
                      create account
                    </Link>
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

export default Login;
