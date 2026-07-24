import { useParams } from "react-router-dom";
import contactsData from "../../data/contactsData";
import "./ContactDetails.css";

function ContactDetails() {
  const { id } = useParams();

  const contact = contactsData.find(
    (item) => item.id === Number(id)
  );

  if (!contact) {
    return <h2>Contact Not Found</h2>;
  }

  return (
    <div className="details-page">

      {/* Header */}
      <div className="details-header">

        <button className="back-btn">
          ← Back
        </button>

        <div className="header-right">
          <button className="edit-btn">
            Edit
          </button>
        </div>

      </div>

      {/* Profile */}
      <div className="lead-profile">

        <div className="avatar">
          {contact.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </div>

        <div>
          <h1>{contact.name}</h1>
          <p>{contact.designation}</p>
        </div>

      </div>

      {/* Information */}
      <div className="info-card">

        <h2>Contact Information</h2>

        <div className="info-grid">

          <div className="info-item">
            <label>Email</label>
            <p>{contact.email}</p>
          </div>

          <div className="info-item">
            <label>Phone</label>
            <p>{contact.phone}</p>
          </div>

          <div className="info-item">
            <label>Company</label>
            <p>{contact.company}</p>
          </div>

          <div className="info-item">
            <label>Designation</label>
            <p>{contact.designation}</p>
          </div>

          <div className="info-item">
            <label>Owner</label>
            <p>{contact.owner}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ContactDetails;