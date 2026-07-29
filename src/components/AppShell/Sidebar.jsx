import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaThLarge,
  FaUsers,
  FaUserCircle,
  FaBuilding,
  FaBriefcase,
  FaCheckSquare,
  FaChartBar,
  FaCog,
  FaUserCog,
  FaProjectDiagram,
  FaCreditCard,
} from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  const isLinkActive = (path) => {
    if (path === "/dashboard" && (location.pathname === "/dashboard" || location.pathname === "/")) {
      return true;
    }
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <aside className="sidebar">
      {/* Sidebar Header Logo */}
      <div className="sidebar-brand">
        <div className="brand-logo-icon">P</div>
        <div className="brand-text">
          <h2>Panorama CRM</h2>
          <span>Enterprise SaaS</span>
        </div>
      </div>

      {/* Sidebar Navigation Links */}
      <nav className="sidebar-menu">
        <Link
          to="/dashboard"
          className={`nav-item ${isLinkActive("/dashboard") ? "active" : ""}`}
        >
          <FaThLarge className="nav-icon" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/leads"
          className={`nav-item ${isLinkActive("/leads") ? "active" : ""}`}
        >
          <FaUsers className="nav-icon" />
          <span>Leads</span>
        </Link>

        <Link
          to="/contacts"
          className={`nav-item ${isLinkActive("/contacts") ? "active" : ""}`}
        >
          <FaUserCircle className="nav-icon" />
          <span>Contacts</span>
        </Link>

        <Link
          to="/organizations"
          className={`nav-item ${isLinkActive("/organizations") ? "active" : ""}`}
        >
          <FaBuilding className="nav-icon" />
          <span>Organizations</span>
        </Link>

        <Link
          to="/deals"
          className={`nav-item ${isLinkActive("/deals") ? "active" : ""}`}
        >
          <FaBriefcase className="nav-icon" />
          <span>Deals</span>
        </Link>

        <Link
          to="/tasks"
          className={`nav-item ${isLinkActive("/tasks") ? "active" : ""}`}
        >
          <FaCheckSquare className="nav-icon" />
          <span>Tasks</span>
        </Link>

        <Link
          to="/reports"
          className={`nav-item ${isLinkActive("/reports") ? "active" : ""}`}
        >
          <FaChartBar className="nav-icon" />
          <span>Reports</span>
        </Link>

        {/* Settings Group */}
        <div className="nav-group-header">
          <FaCog className="group-icon" />
          <span>Settings</span>
        </div>

        <Link
          to="/settings/company"
          className={`nav-item sub-item ${isLinkActive("/settings/company") ? "active" : ""}`}
        >
          <FaBuilding className="nav-icon" />
          <span>Company Settings</span>
        </Link>

        <Link
          to="/settings/users"
          className={`nav-item sub-item ${isLinkActive("/settings/users") ? "active" : ""}`}
        >
          <FaUserCog className="nav-icon" />
          <span>User Management</span>
        </Link>

        <Link
          to="/settings/pipeline"
          className={`nav-item sub-item ${isLinkActive("/settings/pipeline") ? "active" : ""}`}
        >
          <FaProjectDiagram className="nav-icon" />
          <span>Pipeline</span>
        </Link>

        <Link
          to="/settings/billing"
          className={`nav-item sub-item ${isLinkActive("/settings/billing") ? "active" : ""}`}
        >
          <FaCreditCard className="nav-icon" />
          <span>Billing</span>
        </Link>
      </nav>
    </aside>
  );
}
