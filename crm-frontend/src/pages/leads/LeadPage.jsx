import "./LeadPage.css";
import LeadTable from "../../components/Table/LeadTable";

function LeadPage() {
  return (
    <div className="lead-page">

      {/* Header */}
      <div className="lead-header">
        <h1>Leads</h1>

        <button className="add-btn">
          + Add Lead
        </button>
      </div>

      {/* Search & Filters */}
      <div className="toolbar">

        <input
          type="text"
          placeholder="🔍 Search leads..."
          className="search-box"
        />

        <select className="filter">
          <option>Status</option>
          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
          <option>Lost</option>
        </select>

        <select className="filter">
          <option>Owner</option>
          <option>John</option>
          <option>Alex</option>
          <option>Admin</option>
        </select>

        <select className="filter">
          <option>Source</option>
          <option>Website</option>
          <option>Facebook</option>
          <option>Instagram</option>
          <option>Referral</option>
        </select>

      </div>
      <LeadTable />
      
    </div>
  );
}

export default LeadPage;