import "./Login.css";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="login-page">

      {/* Left Section */}
      <div className="login-left">

        <div className="brand">

          <div className="logo">
            CRM
          </div>

          <h1>Customer Relationship Management</h1>

          <p>
            Manage leads, customers and sales
            from one powerful platform.
          </p>

        </div>

      </div>

      {/* Right Section */}

      <div className="login-right">

        <div className="login-card">

          <h2>Welcome Back 👋</h2>

          <p>
            Sign in to continue
          </p>

          <LoginForm />

        </div>

      </div>

    </div>
  );
}

export default Login;