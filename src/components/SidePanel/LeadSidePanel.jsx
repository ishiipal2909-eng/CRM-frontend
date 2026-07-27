import LeadDetailsContent from "../../pages/leads/LeadDetailsContent";
import "./LeadSidePanel.css";

function LeadSidePanel({ lead, onClose }) {

    if (!lead) return null;

    return (
        <div
            className="sidepanel-overlay"
            onClick={onClose}
        >

            <div
                className="sidepanel"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}

                <div className="sidepanel-header">

                    <h2>Lead Details</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                </div>

                {/* Content */}

                <div className="sidepanel-content">

                    <LeadDetailsContent lead={lead} />

                </div>

            </div>

        </div>
    );
}

export default LeadSidePanel;