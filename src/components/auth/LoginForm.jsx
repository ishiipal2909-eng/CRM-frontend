import "./LoginForm.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import { loginUser } from "../../services/authService";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

function LoginForm() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await loginUser(email, password);
            navigate("/onboarding");
        } catch (err) {
            setError(err.message || "Invalid email or password!");
        } finally {
            setLoading(false);
        }
    };
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
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {showPassword ? (
                        <FaEyeSlash className="eye-icon" onClick={() => setShowPassword(false)} />
                    ) : (
                        <FaEye className="eye-icon" onClick={() => setShowPassword(true)} />
                    )}
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

                {error && <div className="error-message">{error}</div>}

                <button type="submit" disabled={loading}>
                    {loading ? "Signing In..." : "Sign In"}
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