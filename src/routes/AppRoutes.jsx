import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Onboarding from "../pages/Onboarding/Onboarding";
import LeadPage from "../pages/leads/LeadPage";
import ContactPage from "../pages/contacts/ContactPage";
import ContactDetails from "../pages/ContactDetails/ContactDetails";
import OrganisationPage from "../pages/organisations/OrganisationPage";
import LeadDetails from "../pages/LeadDetails/LeadDetails";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/leads" element={<LeadPage />} />
                <Route path="/leads/:id" element={<LeadDetails />} />
                <Route path="/contacts" element={<ContactPage />} />
                <Route path="/contacts/:id" element={<ContactDetails />}/>
                <Route path="/organizations" element={<OrganisationPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;