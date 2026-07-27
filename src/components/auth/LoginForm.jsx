import "./LoginForm.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import {
    FaEnvelope,
    FaLock,
    FaEye
} from "react-icons/fa";

function LoginForm() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin = (e) =>{
        e.preventDefault();
        //Later: claa you backend API to verify email & passwordd
        // API dalo backend team
        console.log("Login: ",{email,password});
        navigate("/onboarding");
    }
    return (
        <>
            <h2>
                Welcome Back👋
            </h2>

            <p>
                Sign in to your CRM workspace
            </p>

            <form onSubmit={handleLogin}>
                <label>Email Address</label>
                <div className="input-box">
                    <FaEnvelope />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <label>Password</label>
                <div className="input-box">
                    <FaLock />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaEye className="eye-icon"/>
                </div>

                <div className="login-options">
                    <label>
                        <input type="checkbox"/>
                        Remember Me
                    </label>
                    <a href="#">
                        Forgot Password?
                    </a>
                </div>
                <button type="submit">
                    Sign In
                </button>
            </form>
                <div className="bottom-text">
                    Don't have an account
                    <Link to="/signup"> Sign Up</Link>
                </div>
            
        </>
    );
}

export default LoginForm;