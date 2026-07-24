import { useState, useRef } from "react";
import "./ContactPage.css";
import ContactTable from "../../components/Table/ContactTable";
import ContactModal from "../../components/Modal/ContactModal";
import contactsData from "../../data/contactsData";

function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState(contactsData);
  const [editingContact, setEditingContact] = useState(null);
  const fileInputRef = useRef(null);

  const [search, setSearch] = useState("");
  const [ownerFilter, setOwnerFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5;


  // Add Contact
  const addContact = (newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      {
        id: prevContacts.length + 1,
        ...newContact,
      },
    ]);

    setShowModal(false);
  };


  // Update Contact
  const updateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id
          ? updatedContact
          : contact
      )
    );

    setEditingContact(null);
    setShowModal(false);
  };

  //Export Contact
  const exportContacts = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Company",
      "Designation",
      "Owner",
    ];

    const rows = contacts.map((contact) => [
      contact.name,
      contact.email,
      contact.phone,
      contact.company,
      contact.designation,
      contact.owner,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "contacts.csv";

    link.click();
  };

  // Delete Contact
  const deleteContact = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (confirmDelete) {
      setContacts((prevContacts) =>
        prevContacts.filter(
          (contact) => contact.id !== id
        )
      );
    }
  };


  // Search and Filters
  const filteredContacts = contacts.filter((contact) => {

    const matchesSearch =
      contact.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesOwner =
      ownerFilter === "" ||
      contact.owner === ownerFilter;

    const matchesCompany =
      companyFilter === "" ||
      contact.company === companyFilter;

    return (
      matchesSearch &&
      matchesOwner &&
      matchesCompany
    );

  });


  // Pagination
  const totalPages = Math.ceil(
    filteredContacts.length / contactsPerPage
  );


  const indexOfLastContact =
    currentPage * contactsPerPage;


  const indexOfFirstContact =
    indexOfLastContact - contactsPerPage;


  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );


  // Edit Button
  const handleEdit = (contact) => {
    setEditingContact(contact);
    setShowModal(true);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    alert(`Selected File: ${file.name}`);
  };


  return (
    <div className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <h1>Contacts</h1>

        <div className="header-buttons">

          <button
            className="import-btn"
            onClick={() => fileInputRef.current.click()}
          >
            Import
          </button>

          <button
            className="export-btn"
            onClick={exportContacts}
          >
            Export
          </button>

          <button
            className="add-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Contact
          </button>

        </div>
      </div>


      {/* Search & Filters */}
      <div className="toolbar">

        <input
          type="text"
          placeholder="🔍 Search contacts..."
          className="search-box"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          className="filter"
          value={ownerFilter}
          onChange={(e) =>
            setOwnerFilter(e.target.value)
          }
        >
          <option value="">
            All Owners
          </option>

          <option value="John">
            John
          </option>

          <option value="Alex">
            Alex
          </option>

          <option value="Sam">
            Sam
          </option>

        </select>


        <select
          className="filter"
          value={companyFilter}
          onChange={(e) =>
            setCompanyFilter(e.target.value)
          }
        >

          <option value="">
            All Companies
          </option>

          <option value="TCS">
            TCS
          </option>

          <option value="Infosys">
            Infosys
          </option>

          <option value="Wipro">
            Wipro
          </option>

        </select>

      </div>


      {/* Table */}
      <ContactTable
        contacts={currentContacts}
        onEdit={handleEdit}
        onDelete={deleteContact}
      />


      {/* Pagination */}
      <div className="pagination">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Previous
        </button>


        <span>
          Page {currentPage} of {totalPages}
        </span>


        <button
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>

      </div>


      {/* Modal */}
      {showModal && (
        <ContactModal
          onClose={() => {
            setShowModal(false);
            setEditingContact(null);
          }}

          addContact={addContact}

          editingContact={editingContact}

          updateContact={updateContact}
        />
      )}

      <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImport}
      />

    </div>
  );
}

export default ContactPage;