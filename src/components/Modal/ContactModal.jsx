import { useState } from "react";
import "./ContactModal.css";

function ContactModal({ onClose, addContact, editingContact, updateContact, }) {
    const [name, setName] = useState(editingContact?.name || "");
    const [email, setEmail] = useState(editingContact?.email || "");
    const [phone, setPhone] = useState(editingContact?.phone || "");
    const [company, setCompany] = useState(editingContact?.company || "");
    const [designation, setDesignation] = useState(editingContact?.designation || "");
    const [owner, setOwner] = useState(editingContact?.owner || "John");
    const handleSave = () => {
        if (!name || !email || !phone || !company) {
            alert("Please fill all required fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }

        if (phone.length < 10) {
            alert("Phone number must be at least 10 digits.");
            return;
        }

        const contactData = {
            id: editingContact?.id,
            name,
            email,
            phone,
            company,
            designation,
            owner,
        };

        if (editingContact) {
            updateContact(contactData);
        } else {
            addContact(contactData);
        }
    };

    return (
        <div className="modal-overlay">

            <div className="modal">

                <div className="modal-header">
                    <h2>
                        {editingContact ? "Edit Contact" : "Add Contact"}
                    </h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                />

                <select
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                >
                    <option>John</option>
                    <option>Alex</option>
                    <option>Sam</option>
                </select>

                <div className="modal-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="save-btn"
                        onClick={handleSave}
                    >
                        {editingContact ? "Update Contact" : "Save Contact"}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ContactModal;