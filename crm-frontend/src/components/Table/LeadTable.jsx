import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LeadTable.css";
import leads from "../../data/leadsData";

function LeadTable() {
  const navigate = useNavigate();

  return (
    <div className="table-container">
      <table className="lead-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.company}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>

              <td>
                <span className={`status ${lead.status.toLowerCase()}`}>
                  {lead.status}
                </span>
              </td>

              <td>{lead.owner}</td>

              {/* Actions */}
              <td>
                <div className="action-buttons">

                  <button
                    className="view-btn"
                    onClick={() => navigate(`/leads/${lead.id}`)}
                  >
                    <FaEye />
                  </button>

                  <button className="edit-btn">
                    <FaEdit />
                  </button>

                  <button className="delete-btn">
                    <FaTrash />
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;