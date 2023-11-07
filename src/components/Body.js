import { useRef, useState, useEffect } from "react";
import ".././utils/Body.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import verify from "../utils/Verification";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase_init";

export const Body = () => {
  const currentEmail = useRef(null);
  const currentPassword = useRef(null);
  const [errText, setErrText] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (verify(currentEmail.current.value, currentPassword.current.value)) {
      signInWithEmailAndPassword(
        auth,
        currentEmail.current.value,
        currentPassword.current.value
      )
        .then((userCredential) => {
          navigate("/mainpage", {
            state: {
              username: userCredential.user.displayName,
              userId: userCredential.user.uid,
            },
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorCode}->${errorMessage}`);
        });
      setErrText(null);
    } else {
      setErrText("Not Valid!");
    }
  };
  useEffect(() => {
    document.body.classList.add("home-body");

    return () => {
      document.body.classList.remove("home-body");
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="bubbles">
          <span style={{ "--delay": 11 }}></span>
          <span style={{ "--delay": 12 }}></span>
          <span style={{ "--delay": 24 }}></span>
          <span style={{ "--delay": 10 }}></span>
          <span style={{ "--delay": 14 }}></span>
          <span style={{ "--delay": 23 }}></span>
          <span style={{ "--delay": 18 }}></span>
          <span style={{ "--delay": 16 }}></span>
          <span style={{ "--delay": 19 }}></span>
          <span style={{ "--delay": 20 }}></span>
          <span style={{ "--delay": 22 }}></span>
          <span style={{ "--delay": 25 }}></span>
          <span style={{ "--delay": 18 }}></span>
          <span style={{ "--delay": 21 }}></span>
          <span style={{ "--delay": 15 }}></span>
          <span style={{ "--delay": 13 }}></span>
          <span style={{ "--delay": 26 }}></span>
          <span style={{ "--delay": 17 }}></span>
          <span style={{ "--delay": 13 }}></span>
          <span style={{ "--delay": 28 }}></span>
          <span style={{ "--delay": 11 }}></span>
          <span style={{ "--delay": 12 }}></span>
          <span style={{ "--delay": 24 }}></span>
          <span style={{ "--delay": 10 }}></span>
          <span style={{ "--delay": 14 }}></span>
          <span style={{ "--delay": 23 }}></span>
          <span style={{ "--delay": 18 }}></span>
          <span style={{ "--delay": 16 }}></span>
          <span style={{ "--delay": 19 }}></span>
          <span style={{ "--delay": 20 }}></span>
          <span style={{ "--delay": 22 }}></span>
          <span style={{ "--delay": 25 }}></span>
          <span style={{ "--delay": 18 }}></span>
          <span style={{ "--delay": 21 }}></span>
          <span style={{ "--delay": 15 }}></span>
          <span style={{ "--delay": 13 }}></span>
          <span style={{ "--delay": 26 }}></span>
          <span style={{ "--delay": 17 }}></span>
          <span style={{ "--delay": 13 }}></span>
          <span style={{ "--delay": 28 }}></span>
          <span style={{ "--delay": 11 }}></span>
          <span style={{ "--delay": 12 }}></span>
          <span style={{ "--delay": 24 }}></span>
          <span style={{ "--delay": 10 }}></span>
          <span style={{ "--delay": 14 }}></span>
          <span style={{ "--delay": 23 }}></span>
          <span style={{ "--delay": 18 }}></span>
          <span style={{ "--delay": 16 }}></span>
          <span style={{ "--delay": 19 }}></span>
          <span style={{ "--delay": 20 }}></span>
          <span style={{ "--delay": 22 }}></span>
          <span style={{ "--delay": 25 }}></span>
          <span style={{ "--delay": 18 }}></span>
          <span style={{ "--delay": 21 }}></span>
          <span style={{ "--delay": 21 }}></span>
        </div>
      </div>
      <div class="login-container">
        <h2 id="login-txt">Login</h2>
        <div className="login-elements">
          <label htmlFor="user-inp-box">Email</label>
          <input
            type="text"
            id="user-inp-box"
            placeholder="email"
            ref={currentEmail}
          />
          <label htmlFor="pswd-inp-box">Password</label>
          <input
            type="password"
            id="pswd-inp-box"
            placeholder="password"
            ref={currentPassword}
          />
          <p id="err-txt">{errText}</p>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </>
  );
};
export default Body;
