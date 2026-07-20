function LoginForm() {
  return (
    <form>

      <div className="input-group">

        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
        />

      </div>

      <div className="input-group">

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
        />

      </div>

      <div className="login-options">

        <label>

          <input type="checkbox" />

          Remember Me

        </label>

        <a href="/">
          Forgot Password?
        </a>

      </div>

      <button>
        Sign In
      </button>

    </form>
  );
}

export default LoginForm;