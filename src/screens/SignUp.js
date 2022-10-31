import { useRef, useState } from "react";
import "./SignUp.css";

function SignUpScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [createdAccount, setCreatedAccount] = useState(false);

  const createAccountHandler = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // Create account
    alert(`Created account with email ${email} and password ${password}`);
    setCreatedAccount(true);
  };

  if (createdAccount) {
    return <div>Created account</div>;
  }
  return (
    <div className="signup__screen">
      <label>Email</label>
      <input ref={emailRef} placeholder="Enter your email" />
      <label>Password</label>
      <input ref={passwordRef} placeholder="Enter your password" />
      <button onClick={createAccountHandler}>Create Account</button>
    </div>
  );
}

export default SignUpScreen;
