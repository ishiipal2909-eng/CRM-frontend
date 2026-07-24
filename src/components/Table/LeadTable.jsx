import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LeadTable.css";

function LeadTable({ leads, onView, onEdit, onDelete }) {
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
            <th>Source</th>
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
              <td>{lead.source}</td>

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
                    onClick={() => onView(lead)}
                  >
                    <FaEye />
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(lead)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(lead.id)}
                  >
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