import { useState } from "react";
import "./OrganisationModal.css";

function OrganisationModal({ onClose, addOrganisation, editingOrganisation, updateOrganisation, }) {
    const [name, setName] = useState(editingOrganisation?.name || "");
    const [industry, setIndustry] = useState(editingOrganisation?.industry || "");
    const [website, setWebsite] = useState(editingOrganisation?.website || "");
    const [phone, setPhone] = useState(editingOrganisation?.phone || "");
    const [owner, setOwner] = useState(editingOrganisation?.owner || "John");
    const [status, setStatus] = useState(editingOrganisation?.status || "Active");

    const handleSave = () => {

        if (!name || !industry || !website || !phone) {
            alert("Please fill all fields.");
            return;
        }

        const organisationData = {
            id: editingOrganisation?.id,
            name,
            industry,
            website,
            phone,
            owner,
            status,
        };

        if (editingOrganisation) {
            updateOrganisation(organisationData);
        } else {
            addOrganisation(organisationData);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">

                <div className="modal-header">
                    <h2>
                        {editingOrganisation
                            ? "Edit Organisation"
                            : "Add Organisation"}
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
                    placeholder="Organisation Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <select
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                >
                    <option>John</option>
                    <option>Alex</option>
                    <option>Sam</option>
                </select>

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option>Active</option>
                    <option>Inactive</option>
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
                        {editingOrganisation
                            ? "Update Organisation"
                            : "Save Organisation"}
                    </button>

                </div>

            </div>
        </div>
    );
}

export default OrganisationModal;