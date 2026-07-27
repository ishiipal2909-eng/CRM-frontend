import "./LoginForm.css";
import { useNavigate, Link } from "react-router-dom";
import {
    FaEnvelope,
    FaLock,
    FaEye
} from "react-icons/fa";

function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since no existing authentication flow is implemented,
        // we temporarily redirect Login -> Onboarding as specified in the safety requirements.
        navigate("/onboarding");
    };

    return (
        <>
            <h2>
                Welcome Back👋
            </h2>

            <p>
                Sign in to your CRM workspace
            </p>

            <form onSubmit={handleSubmit}>
                <label>Email Address</label>
                <div className="input-box">
                    <FaEnvelope />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <label>Password</label>

                <div className="input-box">
                    <FaLock />

                    <input
                        type="password"
                        placeholder="Enter your password"
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
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
}

export default LoginForm;