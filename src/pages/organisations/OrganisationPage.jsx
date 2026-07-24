import { useState } from "react";
import "./OrganisationPage.css";
import OrganisationTable from "../../components/Table/OrganisationTable";
import OrganisationModal from "../../components/Modal/OrganisationModal";
import organisationsData from "../../data/organisationsData";

function OrganisationPage() {
  const [showModal, setShowModal] = useState(false);
  const [organisations, setOrganisations] = useState(organisationsData);
  const [editingOrganisation, setEditingOrganisation] = useState(null);

  const [search, setSearch] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Add Organisation
  const addOrganisation = (newOrganisation) => {
    setOrganisations((prevOrganisations) => [
      ...prevOrganisations,
      {
        id: prevOrganisations.length + 1,
        ...newOrganisation,
      },
    ]);

    setShowModal(false);
  };

  const updateOrganisation = (updatedOrganisation) => {
    setOrganisations((prevOrganisations) =>
      prevOrganisations.map((organisation) =>
        organisation.id === updatedOrganisation.id
          ? updatedOrganisation
          : organisation
      )
    );

    setEditingOrganisation(null);
    setShowModal(false);
  };

  const deleteOrganisation = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this organisation?"
    );

    if (!confirmDelete) return;

    setOrganisations((prevOrganisations) =>
      prevOrganisations.filter(
        (organisation) => organisation.id !== id
      )
    );
  };

  const handleEdit = (organisation) => {
    setEditingOrganisation(organisation);
    setShowModal(true);
  };

  // Search & Filter
  const filteredOrganisations = organisations.filter((organisation) => {
    const matchesSearch = organisation.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesOwner =
      ownerFilter === "" || organisation.owner === ownerFilter;

    const matchesStatus =
      statusFilter === "" || organisation.status === statusFilter;

    return matchesSearch && matchesOwner && matchesStatus;
  });

  return (
    <div className="organisation-page">

      {/* Header */}
      <div className="organisation-header">
        <h1>Organisations</h1>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Organisation
        </button>
      </div>

      {/* Search & Filters */}
      <div className="toolbar">

        <input
          type="text"
          placeholder="🔍 Search organisations..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

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
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

      </div>

      {/* Table */}
      <OrganisationTable
        organisations={filteredOrganisations}
        onEdit={handleEdit}
        onDelete={deleteOrganisation}
      />

      {/* Modal */}
      {showModal && (
        <OrganisationModal
          onClose={() => {
            setShowModal(false);
            setEditingOrganisation(null);
          }}
          addOrganisation={addOrganisation}
          editingOrganisation={editingOrganisation}
          updateOrganisation={updateOrganisation}
        />
      )}

    </div>
  );
}

export default OrganisationPage;