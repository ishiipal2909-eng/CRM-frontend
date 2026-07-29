import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaEnvelope,
  FaTag,
  FaRocket,
  FaLock,
} from "react-icons/fa";

import { signupUser, checkSlugAvailability } from "../../services/authService";
import signupBg from "../../assets/signup.png";

import "./Signup.css";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password:"",
    confirmPassword:"",
    plan: "Trial",
    slug: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [slugStatus, setSlugStatus] = useState({ checking: false, available: null, message: "" });

  // Live slug checking effect
  useEffect(() => {
    if (!formData.slug || formData.slug.trim().length === 0) {
      setSlugStatus({ checking: false, available: null, message: "" });
      return;
    }

    setSlugStatus({ checking: true, available: null, message: "Checking availability..." });

    const timer = setTimeout(async () => {
      try {
        const res = await checkSlugAvailability(formData.slug);
        // Frappe returns { message: { available: true/false, message: "..." } } or direct JSON
        const result = res.message || res;
        if (result.available) {
          setSlugStatus({ checking: false, available: true, message: "✓ Workspace URL is available!" });
        } else {
          setSlugStatus({ checking: false, available: false, message: result.message || "Slug is not available." });
        }
      } catch (err) {
        setSlugStatus({ checking: false, available: null, message: "" });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [formData.slug]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "companyName") {

      setFormData({
        ...formData,
        companyName: value,
        slug: value
          .toLowerCase()
          .replace(/[^a-z0-9 ]/g, "")
          .replace(/\s+/g, "-"),
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (slugStatus.available === false) {
      setError(slugStatus.message || "Please choose an available workspace slug.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    setLoading(true);
    try {
      await signupUser(formData);
      navigate("/login");
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div
      className="signup-page"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 30, 66, 0.25), rgba(9, 30, 66, 0.25)), url(${signupBg})`,
      }}
    >

      <div className="signup-card">

        <h1>Start Your Free Trial</h1>

        <p>Create your CRM workspace in less than a minute.</p>

        <form onSubmit={handleSubmit}>

          <label>Company Name</label>

          <div className="input-box">
            <FaBuilding />
            <input
              type="text"
              name="companyName"
              placeholder="ABC Pvt Ltd"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <label>Email</label>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <label>Password</label>
            <div className="input-box">
              <FaLock />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  />
            </div>
          <label>Confirm Password</label>
            <div className="input-box">
              <FaLock />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                />
            </div>

          <label>Plan</label>

          <div className="input-box">
            <FaRocket />
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
            >
              <option>Trial</option>
            </select>
          </div>

          <label>Workspace Slug</label>

          <div className="input-box">
            <FaTag />
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
            />
          </div>

          <div className="workspace-url">
            https://{formData.slug || "workspace"}.crm.com
          </div>

          {slugStatus.message && (
            <div
              className={`slug-status ${
                slugStatus.available ? "available" : slugStatus.checking ? "checking" : "taken"
              }`}
            >
              {slugStatus.message}
            </div>
          )}

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading || slugStatus.available === false}>
            {loading ? "Creating Workspace..." : "Start Free Trial"}
          </button>

        </form>

        <div className="bottom-text">
          Already have an account?
          <Link to="/login"> Sign In</Link>
        </div>

      </div>

    </div>

  );

}

export default Signup;