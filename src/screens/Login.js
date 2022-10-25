
import { useRef } from 'react';
import './Login.css';

function LoginScreen() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const loginHandler = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // Create account
        alert(`Logged with email ${email} and password ${password}`)
    }

    return <div className="login__screen">
        <label>Email</label>
        <input ref={emailRef} placeholder="Enter your email" />
        <label>Password</label>
        <input ref={passwordRef} placeholder="Enter your password" />
        <button onClick={loginHandler}>Log in my account</button>
    </div>
}

export default LoginScreen;