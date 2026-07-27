import "./Stepper.css";

const steps = [
  "Company",
  "Team",
  "Pipeline",
  "Import",
];

function Stepper({ currentStep }) {

  return (

    <div className="stepper">

      {steps.map((step, index) => {

        const stepNumber = index + 1;

        return (

          <div
            className="step-wrapper"
            key={step}
          >

            <div
              className={`step-circle ${
                currentStep >= stepNumber ? "active" : ""
              }`}
            >

              {currentStep > stepNumber ? "✓" : stepNumber}

            </div>

            <p
              className={`step-title ${
                currentStep >= stepNumber ? "active" : ""
              }`}
            >

              {step}

            </p>

            {stepNumber !== steps.length && (

              <div
                className={`step-line ${
                  currentStep > stepNumber ? "active" : ""
                }`}
              />

            )}

          </div>

        );

      })}

    </div>

  );

}

export default Stepper;