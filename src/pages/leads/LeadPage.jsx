import { useState } from "react";
import "./LeadPage.css";
import LeadTable from "../../components/Table/LeadTable";
import QuickAddModal from "../../components/Modal/QuickAddModal";
import leadsData from "../../data/leadsData";
import LeadSidePanel from "../../components/SidePanel/LeadSidePanel";

function LeadPage() {
  const [selectedLead, setSelectedLead] = useState(null);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingLead, setEditingLead] = useState(null);
  const [leads, setLeads] = useState(leadsData);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("");
  const [sourceFilter, setSourceFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;
  const addLead = (newLead) => {
    setLeads((prevLeads) => [
      ...prevLeads,
      {
        id: prevLeads.length + 1,
        ...newLead,
      },
    ]);

    setShowModal(false);
  };

  const updateLead = (updatedLead) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === updatedLead.id ? updatedLead : lead
      )
    );

    setShowModal(false);
    setEditingLead(null);
  };

  const deleteLead = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    setLeads((prevLeads) =>
      prevLeads.filter((lead) => lead.id !== id)
    );
  };

  const filteredLeads = leads.filter((lead) => {

    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "" || lead.status === statusFilter;

    const matchesOwner =
      ownerFilter === "" || lead.owner === ownerFilter;

    const matchesSource =
      sourceFilter === "" || lead.source === sourceFilter;

    return (matchesSearch && matchesStatus && matchesOwner && matchesSource
    );

  });

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;

  const currentLeads = filteredLeads.slice(
    indexOfFirstLead,
    indexOfLastLead
  );

  const totalPages = Math.ceil(
    filteredLeads.length / leadsPerPage
  );

  const handleEdit = (lead) => {
    setEditingLead(lead);
    setShowModal(true);
  };

  const handleView = (lead) => {
    setSelectedLead(lead);
    setShowSidePanel(true);
  };

  return (
    <div className="lead-page">

      {/* Header */}
      <div className="lead-header">
        <h1>Leads</h1>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Lead
        </button>
      </div>

      {/* Search & Filters */}
      <div className="toolbar">

        <input
          type="text"
          placeholder="🔍 Search leads..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>

        <select
          className="filter"
          value={ownerFilter}
          onChange={(e) => setOwnerFilter(e.target.value)}
        >
          <option value="">All Owners</option>
          <option value="John">John</option>
          <option value="Alex">Alex</option>
          <option value="Sam">Sam</option>
        </select>

        <select
          className="filter"
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
        >
          <option value="">All Sources</option>
          <option value="Website">Website</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Referral">Referral</option>
        </select>

      </div>
      <LeadTable
        leads={currentLeads}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={deleteLead}
      />

      <div className="pagination">

        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>

      {showModal && (
        <QuickAddModal
          onClose={() => {
            setShowModal(false);
            setEditingLead(null);
          }}
          addLead={addLead}
          updateLead={updateLead}
          editingLead={editingLead}
        />
      )}

      {showSidePanel && (
        <LeadSidePanel
          lead={selectedLead}
          onClose={() => setShowSidePanel(false)}
        />
      )}
    </div>
  );
}

export default LeadPage;