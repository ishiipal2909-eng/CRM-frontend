import { useState } from "react";
import "./ImportData.css";
import { useNavigate } from "react-router-dom";

function ImportData({ previousStep }) {

  const [selectedOption, setSelectedOption] = useState("empty");
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {

    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setSelectedOption("import");
    }

  };

  const finishSetup = () => {
    navigate("/dashboard");
  };

  return (

    <div className="import-data">

      <div className="import-header">

        <div>

          <h3>Import Your Data</h3>

          <p>
            Bring your existing CRM data or start with a clean workspace.
          </p>

        </div>

      </div>

      <div className="import-grid">

        <div
          className={`import-card ${
            selectedOption === "empty" ? "selected" : ""
          }`}
          onClick={() => setSelectedOption("empty")}
        >

          <div className="import-icon">🚀</div>

          <h3>Start Fresh</h3>

          <p>
            Create a new CRM without importing any existing data.
          </p>

        </div>

        <div
          className={`import-card ${
            selectedOption === "import" ? "selected" : ""
          }`}
        >

          <div className="import-icon">📄</div>

          <h3>Import CSV</h3>

          <p>
            Import Leads, Contacts or Organizations from CSV.
          </p>

          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
          />

          {fileName && (

            <span className="file-name">

              {fileName}

            </span>

          )}

          <button className="download-btn">

            Download Sample CSV

          </button>

        </div>

      </div>

      <div className="import-footer">

        <button
          className="secondary-btn"
          onClick={previousStep}
        >
          ← Back
        </button>

        <button
          className="primary-btn"
          onClick={finishSetup}
        >
          Finish Setup →
        </button>

      </div>

    </div>

  );

}

export default ImportData;