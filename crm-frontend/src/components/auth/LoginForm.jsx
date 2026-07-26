import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    FaEnvelope,
    FaLock,
    FaEye
} from "react-icons/fa";

function LoginForm() {
    return (
        <>
            <h2>
                Welcome Back👋
            </h2>

            <p>
                Sign in to your CRM workspace
            </p>

            <form>
                <label>Email Address</label>
                <div className="input-box">
                    <FaEnvelope />
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <label>Password</label>

                <div className="input-box">
                    <FaLock />

                    <input
                        type="password"
                        placeholder="Enter your password"
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
                <div className="bottom-text">
                    Don't have an account
                    <Link to="/signup"> Sign Up</Link>
                </div>
            </form>
        </>
    );
}

export default LoginForm;