import { BrowserRouter, Routes, Route } from "react-router-dom";

import LeadPage from "../pages/leads/LeadPage";
import ContactPage from "../pages/contacts/ContactPage";
import ContactDetails from "../pages/ContactDetails/ContactDetails";
import OrganisationPage from "../pages/organisations/OrganisationPage";
import LeadDetails from "../pages/LeadDetails/LeadDetails";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Onboarding from "../pages/Onboarding/Onboarding";
import AppShell from "../components/AppShell/AppShell";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/onboarding" element={<Onboarding />} />

                {/* Authenticated Dashboard Routes wrapped inside AppShell */}
                <Route element={<AppShell />}>
                    <Route path="/leads" element={<LeadPage />} />
                    <Route path="/contacts" element={<ContactPage />} />
                    <Route path="/contacts/:id" element={<ContactDetails />}/>
                    <Route path="/organizations" element={<OrganisationPage />} />
                    <Route path="/leads/:id" element={<LeadDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;