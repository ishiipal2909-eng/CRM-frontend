import "./BrandPanel.css";
import logo from "../../assets/logo.png";

function BrandPanel() {
  return (
    <div className="brand-panel">

      <img
        src={logo}
        alt="Panorama Logo"
        className="company-logo"
      />

      <h1>
        Customer Relationship Management
      </h1>

      <p className="developed-by">
        Developed by
      </p>

      <h3>
        Panorama Automations and Consultancy LLP
      </h3>

      <button className="crm-tag">
        CRM Platform
      </button>

    </div>
  );
}

export default BrandPanel;