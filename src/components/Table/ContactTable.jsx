import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ContactTable.css";

function ContactTable({ contacts, onEdit, onDelete }) {
    const navigate = useNavigate();

    return (
        <div className="table-container">
            <table className="contact-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Designation</th>
                        <th>Owner</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {contacts.length > 0 ? (
                        contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.company}</td>
                                <td>{contact.designation}</td>
                                <td>{contact.owner}</td>

                                <td>
                                    <div className="action-buttons">
                                        <button
                                            className="view-btn"
                                            onClick={() => navigate(`/contacts/${contact.id}`)}
                                        >
                                            <FaEye />
                                        </button>

                                        <button
                                            className="edit-btn"
                                            onClick={() => onEdit(contact)}
                                        >
                                            <FaEdit />
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() => onDelete(contact.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="no-data">
                                No Contacts Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ContactTable;