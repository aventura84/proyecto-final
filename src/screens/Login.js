import { useRef } from "react";
import services from "../services";
import { useSetUser, useUser } from "../UserContext";
import "./Login.css";

function LoginScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const setUser = useSetUser();

  const loginHandler = async () => {
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    const { id, email, token } = await services.user.login({
      email: emailInput,
      password: passwordInput,
    });
    setUser({
      id: id,
      email: email,
      token: token,
    });
    // Redirect to /home
    window.location = "/";
  };

  return (
    <div className="login__screen">
      <label>Email</label>
      <input ref={emailRef} placeholder="Enter your email" />
      <label>Password</label>
      <input ref={passwordRef} placeholder="Enter your password" />
      <button onClick={loginHandler}>Log in my account</button>
    </div>
  );
}

export default LoginScreen;
