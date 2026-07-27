import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: "📊" },
  { label: "My Day", icon: "☀️" },
  { label: "Leads", icon: "🎯" },
  { label: "Deals", icon: "💼" },
  { label: "Contacts", icon: "👤" },
  { label: "Organizations", icon: "🏢" },
  { label: "Import", icon: "📥" },
  { label: "Reports", icon: "📈" },
  { label: "Settings", icon: "⚙️" }
];
export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = React.useState("Dashboard");

  React.useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/leads")) {
      setActive("Leads");
    } else if (path.startsWith("/contacts")) {
      setActive("Contacts");
    } else if (path.startsWith("/organizations")) {
      setActive("Organizations");
    }
  }, [location.pathname]);

  const linkStyle = (name) => "sidebar-link " + (active === name ? "active" : "");
  const handleClick = (e, name) => {
    if (name === "Leads" || name === "Dashboard") {
      navigate("/leads");
    } else if (name === "Contacts") {
      navigate("/contacts");
    } else if (name === "Organizations") {
      navigate("/organizations");
    } else {
      e.preventDefault();
      setActive(name);
    }
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Panorama CRM</div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a key={item.label} href="#" className={linkStyle(item.label)} onClick={(e) => handleClick(e, item.label)}>
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
