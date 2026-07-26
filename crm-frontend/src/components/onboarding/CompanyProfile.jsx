import { useState } from "react";
import "./CompanyProfile.css";

function CompanyProfile({ nextStep }) {

  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [currency, setCurrency] = useState("INR");
  const [logo, setLogo] = useState(null);

  const handleLogo = (e) => {
    if (e.target.files[0]) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleContinue = () => {

    if (!companyName.trim()) {
      alert("Please enter your company name.");
      return;
    }

    nextStep();

  };

  return (

    <div className="company-profile">

      <div className="company-header">

        <div>

          <h3>Company Profile</h3>

          <p>
            Tell us about your company to personalize your CRM workspace.
          </p>

        </div>

        <button className="skip-btn" onClick={nextStep}>
          Skip
        </button>

      </div>

      <div className="logo-section">

        <label htmlFor="logoUpload">

          <div className="logo-box">

            {logo ? (
              <img src={logo} alt="Company Logo" />
            ) : (
              <>
                <div className="upload-icon">📷</div>
                <span>Upload Logo</span>
              </>
            )}

          </div>

        </label>

        <input
          id="logoUpload"
          type="file"
          accept="image/*"
          hidden
          onChange={handleLogo}
        />

      </div>

      <div className="company-form">

        <div className="form-group">

          <label>Company Name *</label>

          <input
            type="text"
            placeholder="Panorama Automations Pvt. Ltd."
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

        </div>

        <div className="form-group">

          <label>Industry</label>

          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="">Select Industry</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Retail</option>
            <option>Education</option>
          </select>

        </div>

        <div className="form-group">

          <label>Timezone</label>

          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            <option>Asia/Kolkata</option>
            <option>Europe/London</option>
            <option>America/New_York</option>
          </select>

        </div>

        <div className="form-group">

          <label>Currency</label>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>

        </div>

      </div>

      <div className="company-footer">

        <button
          className="primary-btn"
          onClick={handleContinue}
        >
          Continue →
        </button>

      </div>

    </div>

  );

}

export default CompanyProfile;