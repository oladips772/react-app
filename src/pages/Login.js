/** @format */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("userInfo", user.email);
        navigate("/");
        alert("login successful");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // if (errorMessage === "Firebase: Error (auth/user-not-found).") {
        //   alert("User not found with email provided please create an account");
        // }
        alert(errorMessage);
      });
  }

  return (
    <div className="login">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <Link to={"/register"}>Create an account if you don't have any</Link>
    </div>
  );
}

export default Login;
