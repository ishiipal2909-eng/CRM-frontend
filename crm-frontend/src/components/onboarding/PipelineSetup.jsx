import { useState } from "react";
import "./PipelineSetup.css";

function PipelineSetup({ nextStep, previousStep }) {

  const [stages, setStages] = useState([
    "Lead",
    "Qualified",
    "Proposal",
    "Negotiation",
    "Won",
  ]);

  const [newStage, setNewStage] = useState("");

  const addStage = () => {

    if (!newStage.trim()) return;

    setStages([...stages, newStage]);

    setNewStage("");

  };

  const deleteStage = (index) => {

    const updated = [...stages];

    updated.splice(index, 1);

    setStages(updated);

  };

  return (

    <div className="pipeline">

      <div className="pipeline-header">

        <div>

          <h3>Pipeline Setup</h3>

          <p>
            Customize your sales pipeline stages.
          </p>

        </div>

        <button
          className="skip-btn"
          onClick={nextStep}
        >
          Skip
        </button>

      </div>

      <div className="pipeline-input">

        <input
          type="text"
          placeholder="Enter pipeline stage"
          value={newStage}
          onChange={(e) => setNewStage(e.target.value)}
        />

        <button
          className="add-stage-btn"
          onClick={addStage}
        >
          + Add Stage
        </button>

      </div>

      <div className="pipeline-list">

        {stages.map((stage, index) => (

          <div
            className="pipeline-card"
            key={index}
          >

            <div className="stage-left">

              <div className="stage-number">

                {index + 1}

              </div>

              <span>{stage}</span>

            </div>

            <button
              className="delete-btn"
              onClick={() => deleteStage(index)}
            >
              ✕
            </button>

          </div>

        ))}

      </div>

      <div className="pipeline-footer">

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

export default PipelineSetup;