import { useState } from "react";
import "./QuickAddModal.css";

function QuickAddModal({ onClose, addLead, editingLead, updateLead }) {
  const [name, setName] = useState(editingLead?.name || "");
  const [company, setCompany] = useState(editingLead?.company || "");
  const [email, setEmail] = useState(editingLead?.email || "");
  const [phone, setPhone] = useState(editingLead?.phone || "");
  const [status, setStatus] = useState(editingLead?.status || "New");
  const [owner, setOwner] = useState(editingLead?.owner || "John");
  const [source, setSource] = useState(editingLead?.source || "Website");

  const handleSave = () => {
    if (!name || !company || !email || !phone) {
      alert("Please fill all required fields.");
      return;
    }

    const leadData = {
      id: editingLead?.id,
      name,
      email,
      phone,
      company,
      status,
      owner,
      source,
    };

    if (editingLead) {
      updateLead(leadData);
    } else {
      addLead(leadData);
    }

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-header">
          <h2>{editingLead ? "Edit Lead" : "Add New Lead"}</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <input
          type="text"
          placeholder="Lead Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
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

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>New</option>
          <option>Qualified</option>
          <option>Contacted</option>
          <option>Lost</option>
        </select>

        <select
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        >
          <option>John</option>
          <option>Alex</option>
          <option>Sam</option>
        </select>

        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
        >
          <option>Website</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Referral</option>
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
            {editingLead ? "Update Lead" : "Save Lead"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default QuickAddModal;