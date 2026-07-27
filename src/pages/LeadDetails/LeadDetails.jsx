import { useParams, useNavigate } from "react-router-dom";
import leads from "../../data/leadsData";
import LeadDetailsContent from "../../pages/leads/LeadDetailsContent";
import "./LeadDetails.css";

function LeadDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const lead = leads.find(
        (item) => item.id === Number(id)
    );

    if (!lead) {
        return <h2>Lead Not Found</h2>;
    }

    return (
        <div className="details-page">

            {/* Top Header */}
            <div className="details-header">

                <button
                    className="back-btn"
                    onClick={() => navigate("/leads")}
                >
                    ← Back
                </button>

                <div className="header-right">

                    <button className="edit-btn">
                        Edit
                    </button>

                    <button className="convert-btn">
                        Convert Lead
                    </button>

                </div>

            </div>

            {/* Reusable Component */}
            <LeadDetailsContent lead={lead} />

        </div>
    );
}

export default LeadDetails;