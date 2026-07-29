import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaBriefcase,
  FaMoneyBillWave,
  FaBullseye,
  FaPlus,
  FaArrowUp,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import { fetchLeads } from "../../services/crmService";
import QuickAddModal from "../../components/Modal/QuickAddModal";
import "./Dashboard.css";

export default function Dashboard() {
  const [leadsCount, setLeadsCount] = useState(245);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Follow up with Sharma Industries", due: "Today, 3:00 PM", done: false },
    { id: 2, title: "Send revised proposal to Mehta Corp", due: "Today, 5:30 PM", done: false },
    { id: 3, title: "Schedule demo call for ERP project", due: "Tomorrow", done: false },
  ]);

  useEffect(() => {
    // Attempt to fetch real leads count from API if available
    fetchLeads()
      .then((data) => {
        if (Array.isArray(data)) {
          setLeadsCount(data.length);
        }
      })
      .catch(() => {
        // Fallback to initial value if server is offline
      });
  }, []);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="dashboard-container">
      {/* 1. WELCOME BAR */}
      <div className="welcome-bar">
        <div className="welcome-text">
          <h1>Welcome Back, Admin 👋</h1>
          <p>Here's what's happening with your workspace today.</p>
        </div>
        <div className="welcome-actions">
          <button
            className="btn-quick-add"
            onClick={() => setIsQuickAddOpen(true)}
          >
            <FaPlus /> <span>Quick Add</span>
          </button>
        </div>
      </div>

      {/* 2. KPI CARDS */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-icon icon-leads">
            <FaUsers />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">Total Leads</span>
            <div className="kpi-value-row">
              <span className="kpi-value">{leadsCount}</span>
              <span className="kpi-badge positive">
                <FaArrowUp /> 12.5%
              </span>
            </div>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon icon-deals">
            <FaBriefcase />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">Open Deals</span>
            <div className="kpi-value-row">
              <span className="kpi-value">38</span>
              <span className="kpi-badge positive">
                <FaArrowUp /> 8.2%
              </span>
            </div>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon icon-revenue">
            <FaMoneyBillWave />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">Revenue This Month</span>
            <div className="kpi-value-row">
              <span className="kpi-value">₹12,45,000</span>
              <span className="kpi-badge positive">
                <FaArrowUp /> 18.4%
              </span>
            </div>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon icon-conversion">
            <FaBullseye />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">Conversion Rate</span>
            <div className="kpi-value-row">
              <span className="kpi-value">24.5%</span>
              <span className="kpi-badge positive">
                <FaArrowUp /> 3.1%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PIPELINE FUNNEL & REVENUE CHART */}
      <div className="dashboard-grid-two">
        {/* Pipeline Funnel */}
        <div className="card-panel">
          <div className="panel-header">
            <h3>Sales Pipeline</h3>
            <Link to="/deals" className="panel-link">View Pipeline →</Link>
          </div>
          <div className="pipeline-funnel">
            <div className="funnel-stage stage-new">
              <div className="stage-info">
                <span>New Leads</span>
                <strong>12 deals</strong>
              </div>
              <div className="stage-bar" style={{ width: "100%" }}>
                <span>₹5,20,000</span>
              </div>
            </div>

            <div className="funnel-stage stage-qualified">
              <div className="stage-info">
                <span>Qualified</span>
                <strong>8 deals</strong>
              </div>
              <div className="stage-bar" style={{ width: "80%" }}>
                <span>₹8,10,000</span>
              </div>
            </div>

            <div className="funnel-stage stage-proposal">
              <div className="stage-info">
                <span>Proposal Sent</span>
                <strong>6 deals</strong>
              </div>
              <div className="stage-bar" style={{ width: "60%" }}>
                <span>₹12,40,000</span>
              </div>
            </div>

            <div className="funnel-stage stage-negotiation">
              <div className="stage-info">
                <span>Negotiation</span>
                <strong>5 deals</strong>
              </div>
              <div className="stage-bar" style={{ width: "45%" }}>
                <span>₹15,80,000</span>
              </div>
            </div>

            <div className="funnel-stage stage-won">
              <div className="stage-info">
                <span>Closed Won</span>
                <strong>7 deals</strong>
              </div>
              <div className="stage-bar" style={{ width: "35%" }}>
                <span>₹22,10,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="card-panel">
          <div className="panel-header">
            <h3>Upcoming Tasks</h3>
            <span className="task-count">{tasks.filter(t => !t.done).length} Pending</span>
          </div>
          <div className="task-list">
            {tasks.map((task) => (
              <div key={task.id} className={`task-item ${task.done ? "done" : ""}`}>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <div className="task-info">
                  <span className="task-title">{task.title}</span>
                  <span className="task-due"><FaCalendarAlt /> {task.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. RECENT ACTIVITIES */}
      <div className="card-panel margin-top-24">
        <div className="panel-header">
          <h3>Recent Activities</h3>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon call"><FaPhoneAlt /></div>
            <div className="activity-details">
              <p><strong>Ishika</strong> logged a call with <strong>Rajesh Sharma</strong> (Sharma Industries)</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon email"><FaEnvelope /></div>
            <div className="activity-details">
              <p><strong>Radhika</strong> sent a proposal to <strong>Mehta Corp</strong></p>
              <span className="activity-time">4 hours ago</span>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon deal"><FaBriefcase /></div>
            <div className="activity-details">
              <p><strong>Sumit</strong> moved deal <strong>ERP Software</strong> to Negotiation</p>
              <span className="activity-time">6 hours ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK ADD MODAL */}
      {isQuickAddOpen && (
        <QuickAddModal onClose={() => setIsQuickAddOpen(false)} />
      )}
    </div>
  );
}
