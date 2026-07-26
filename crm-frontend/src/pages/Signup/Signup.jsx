import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaEnvelope,
  FaTag,
  FaRocket,
  FaLock,
} from "react-icons/fa";

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
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword){
        alert("Password do not match!!");
        return;
      }
      if (formData.password.length<6){
        alert("Password must be at least of 6 characters!!");
        return;
      }
      console.log(formData);
      navigate("/login")
    };
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   navigate("/login");
  // };

  return (

    <div className="signup-page">

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
                  placeholder={formData.password}
                  onChange={handleChange}
                  required
                  />
            </div>
          <label>Confirm Password</label>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={formData.confirmPassword}
                onChange="{handleChange}"
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

          <button type="submit">
            Start Free Trial
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