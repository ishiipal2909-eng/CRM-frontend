import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Onboarding from "../pages/Onboarding/Onboarding";
import LeadPage from "../pages/leads/LeadPage";
import ContactPage from "../pages/contacts/ContactPage";
import OrganisationPage from "../pages/organisations/OrganisationPage";
import LeadDetails from "../pages/LeadDetails/LeadDetails";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Onboarding" element={<Onboarding />} />
                <Route path="/leads" element={<LeadPage />} />
                <Route path="/contacts" element={<ContactPage />} />
                <Route path="/organizations" element={<OrganisationPage />} />
                <Route path="/leads/:id" element={<LeadDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;