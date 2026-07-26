import { useState } from "react";

import "./Onboarding.css";

import Stepper from "../../components/onboarding/Stepper";
import CompanyProfile from "../../components/onboarding/CompanyProfile";
import InviteUsers from "../../components/onboarding/InviteUsers";
import PipelineSetup from "../../components/onboarding/PipelineSetup";
import ImportData from "../../components/onboarding/ImportData";

function Onboarding() {

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (

    <div className="onboarding">

      <div className="onboarding-container">

        <div className="onboarding-header">

          <h2>Welcome to CRM 👋</h2>

          <p>
            Let's configure your workspace in less than 2 minutes.
          </p>

        </div>

        <Stepper currentStep={step} />

        <div className="onboarding-content">

          {step === 1 && (
            <CompanyProfile
              nextStep={nextStep}
            />
          )}

          {step === 2 && (
            <InviteUsers
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}

          {step === 3 && (
            <PipelineSetup
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}

          {step === 4 && (
            <ImportData
              previousStep={previousStep}
            />
          )}

        </div>

      </div>

    </div>

  );
}

export default Onboarding;