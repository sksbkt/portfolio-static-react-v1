import { useEffect, useRef, useState } from "react";
import axios from "../../api/axios";
import { LOGIN_URL } from "../../constants/urls";
import { jwtDecode } from "jwt-decode";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response.data));
      const decodedToken: { roles: string } = jwtDecode(response.data.token);
      const roles = decodedToken.roles;
      console.log(roles, decodedToken);

      setAuth({ user, pwd, roles });
      navigate(from, { replace: true });
    } catch (error: any) {
      if (!error.response) {
        setErrMsg("No response from server. Please try again later.");
      } else {
        setErrMsg(error.response.data.message);
      }
      errRef.current?.focus();
    }
  };
  return (
    <>
      <section>
        <div className="authFormContainer">
          <div className="authForm">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                //   ? one time code is for disabling auto fill in chrome
                autoComplete="one-time-code"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                autoComplete="one-time-code"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button>Sign In</button>
            </form>
            <p>
              Need an Account?
              <br />
              <span className="line">
                {/*put router link here*/}
                <a href="#">Sign Up</a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
