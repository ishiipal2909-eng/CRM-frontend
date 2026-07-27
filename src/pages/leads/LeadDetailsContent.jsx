function LeadDetailsContent({ lead }) {

    return (
        <>

            {/* Lead Name */}
            <div className="lead-profile">

                <div className="avatar">
                    {lead.name
                        .split(" ")
                        .map(word => word[0])
                        .join("")}
                </div>

                <div>
                    <h1>{lead.name}</h1>

                    <span className="lead-status">
                        {lead.status}
                    </span>
                </div>

            </div>

            {/* Lead Information */}

            <div className="info-card">

                <h2>Lead Information</h2>

                <div className="info-grid">

                    <div className="info-item">
                        <label>Phone</label>
                        <p>{lead.phone}</p>
                    </div>

                    <div className="info-item">
                        <label>Email</label>
                        <p>{lead.email}</p>
                    </div>

                    <div className="info-item">
                        <label>Company</label>
                        <p>{lead.company}</p>
                    </div>

                    <div className="info-item">
                        <label>Owner</label>
                        <p>{lead.owner}</p>
                    </div>

                    <div className="info-item">
                        <label>Source</label>
                        <p>{lead.source}</p>
                    </div>

                </div>

            </div>

            {/* Activity Timeline */}

            <div className="timeline-card">

                <h2>Activity Timeline</h2>

                <div className="timeline">

                    <div className="timeline-item">

                        <div className="timeline-dot"></div>

                        <div className="timeline-content">

                            <h4>Lead Created</h4>

                            <p>15 July 2026 • 10:30 AM</p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="timeline-dot"></div>

                        <div className="timeline-content">

                            <h4>Email Sent</h4>

                            <p>16 July 2026 • 11:15 AM</p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="timeline-dot"></div>

                        <div className="timeline-content">

                            <h4>Phone Call</h4>

                            <p>17 July 2026 • 4:00 PM</p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="timeline-dot"></div>

                        <div className="timeline-content">

                            <h4>Meeting Scheduled</h4>

                            <p>18 July 2026 • 2:00 PM</p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Tasks */}

            <div className="tasks-card">

                <h2>Tasks</h2>

                <div className="task-item">
                    <input type="checkbox" />
                    <span>Call Customer</span>
                </div>

                <div className="task-item">
                    <input type="checkbox" />
                    <span>Send Product Brochure</span>
                </div>

                <div className="task-item">
                    <input type="checkbox" />
                    <span>Schedule Meeting</span>
                </div>

                <div className="task-item">
                    <input type="checkbox" />
                    <span>Follow Up After 3 Days</span>
                </div>

            </div>

            {/* Duplicate Panel */}

            <div className="duplicate-card">

                <h2>Possible Duplicates</h2>

                <div className="duplicate-success">

                    ✅ No Duplicate Found

                </div>

            </div>

            {/* Notes */}

            <div className="notes-card">

                <div className="notes-header">

                    <h2>Notes</h2>

                    <button className="add-note-btn">

                        + Add Note

                    </button>

                </div>

                <div className="note">

                    <h4>Meeting Completed</h4>

                    <p>
                        Customer showed interest in the Premium CRM package.
                        Asked for pricing details.
                    </p>

                    <span>20 July 2026 • John</span>

                </div>

                <div className="note">

                    <h4>Follow-up Call</h4>

                    <p>
                        Customer requested another demo next week.
                    </p>

                    <span>21 July 2026 • Alex</span>

                </div>

            </div>

            {/* Activity Feed */}

            <div className="activity-card">

                <h2>Recent Activity</h2>

                <div className="activity-item">

                    <div className="activity-icon">
                        🟢
                    </div>

                    <div>

                        <h4>Lead Created</h4>

                        <p>20 July 2026 • John</p>

                    </div>

                </div>

                <div className="activity-item">

                    <div className="activity-icon">
                        📧
                    </div>

                    <div>

                        <h4>Email Sent</h4>

                        <p>21 July 2026 • Alex</p>

                    </div>

                </div>

                <div className="activity-item">

                    <div className="activity-icon">
                        📞
                    </div>

                    <div>

                        <h4>Phone Call Completed</h4>

                        <p>22 July 2026 • Sam</p>

                    </div>

                </div>

                <div className="activity-item">

                    <div className="activity-icon">
                        📅
                    </div>

                    <div>

                        <h4>Meeting Scheduled</h4>

                        <p>24 July 2026 • John</p>

                    </div>

                </div>

            </div>

        </>
    );

}

export default LeadDetailsContent;