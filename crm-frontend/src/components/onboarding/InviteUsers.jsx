import { useState } from "react";
import "./InviteUsers.css";

function InviteUsers({ nextStep, previousStep }) {

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Sales");
  const [members, setMembers] = useState([]);

  const addMember = () => {

    if (!email.trim()) return;

    setMembers([
      ...members,
      {
        email,
        role,
      },
    ]);

    setEmail("");
    setRole("Sales");

  };

  const removeMember = (index) => {

    const updated = [...members];

    updated.splice(index, 1);

    setMembers(updated);

  };

  return (

    <div className="invite-users">

      <div className="invite-header">

        <div>

          <h3>Invite Your Team</h3>

          <p>
            Collaborate with your teammates by inviting them to your CRM workspace.
          </p>

        </div>

        <button
          className="skip-btn"
          onClick={nextStep}
        >
          Skip
        </button>

      </div>

      <div className="invite-form">

        <div className="form-group">

          <label>Email Address</label>

          <input
            type="email"
            placeholder="john@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className="form-group">

          <label>Role</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Admin</option>
            <option>Manager</option>
            <option>Sales</option>
            <option>Support</option>
          </select>

        </div>

        <button
          className="add-member-btn"
          onClick={addMember}
        >
          + Add Member
        </button>

      </div>

      <div className="members-section">

        {members.length === 0 ? (

          <div className="empty-members">

            <h3>No Team Members</h3>

            <p>
              Add your teammates or skip this step.
            </p>

          </div>

        ) : (

          members.map((member, index) => (

            <div
              className="member-card"
              key={index}
            >

              <div className="avatar">

                {member.email.charAt(0).toUpperCase()}

              </div>

              <div className="member-details">

                <h4>{member.email}</h4>

                <span>{member.role}</span>

              </div>

              <button
                className="delete-btn"
                onClick={() => removeMember(index)}
              >
                ✕
              </button>

            </div>

          ))

        )}

      </div>

      <div className="invite-footer">

        <button
          className="secondary-btn"
          onClick={previousStep}
        >
          ← Back
        </button>

        <button
          className="primary-btn"
          onClick={nextStep}
        >
          Continue →
        </button>

      </div>

    </div>

  );

}

export default InviteUsers;