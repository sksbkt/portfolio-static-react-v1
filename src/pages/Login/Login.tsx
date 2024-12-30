import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import { LOGIN_URL } from "../../constants/urls";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLParagraphElement | null>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
      const decodedToken: { role: string } = jwtDecode(response.data.token);
      const role = decodedToken.role;
      console.log(role, decodedToken);

      setAuth({ user, pwd, role });
      setSuccess(true);
    } catch (error: any) {
      if (!error.response) {
        setErrMsg("No response from server. Please try again later.");
      } else {
        setErrMsg(error.response.data.message);
      }
      errRef.current?.focus();
      setSuccess(false);
    }
  };
  return (
    <>
      <section>
        <div className="authFormContainer">
          <div className="authForm">
            {success ? (
              <>
                <h1>You are logged in!</h1>
                <br />
                <p>
                  <a href="#">Go to Home</a>
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
