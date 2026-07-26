import "./Login.css";
import { useNavigate } from "react-router-dom";
import BrandPanel from "../../components/auth/BrandPanel";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
    return (
        <div className="login-page">

            <BrandPanel />

            <div className="login-right">

                <div className="login-card">

                    <LoginForm />

                </div>

            </div>

        </div>
    );
}

export default Login;