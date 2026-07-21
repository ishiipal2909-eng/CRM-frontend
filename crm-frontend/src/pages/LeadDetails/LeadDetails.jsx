import { useParams } from "react-router-dom";
import leads from "../../data/leadsData";
import "./LeadDetails.css";

function LeadDetails() {
    const { id } = useParams();

    const lead = leads.find((item) => item.id === Number(id));
    
    if (!lead) {
        return <h2>Lead Not Found</h2>;
    }
    return (
        <div className="details-page">

            {/* Top Header */}
            <div className="details-header">

                <button className="back-btn">
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

        </div>
    );
}

export default LeadDetails;