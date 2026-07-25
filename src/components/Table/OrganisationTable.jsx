import "./OrganisationTable.css";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function OrganisationTable({ organisations, onEdit, onDelete, }) {
    return (
        <div className="table-container">
            <table className="organisation-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Industry</th>
                        <th>Website</th>
                        <th>Phone</th>
                        <th>Owner</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {organisations.map((org) => (
                        <tr key={org.id}>
                            <td>{org.name}</td>
                            <td>{org.industry}</td>
                            <td>{org.website}</td>
                            <td>{org.phone}</td>
                            <td>{org.owner}</td>
                            <td>{org.status}</td>
                            <td>
                                <div className="action-buttons">

                                    <button
                                        className="edit-btn"
                                        onClick={() => onEdit(org)}
                                    >
                                        <FaEdit />
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => onDelete(org.id)}
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

export default OrganisationTable;