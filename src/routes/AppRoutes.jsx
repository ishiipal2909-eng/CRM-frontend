import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Onboarding from "../pages/Onboarding/Onboarding";
import Dashboard from "../pages/Dashboard/Dashboard";
import LeadPage from "../pages/leads/LeadPage";
import ContactPage from "../pages/contacts/ContactPage";
import ContactDetails from "../pages/ContactDetails/ContactDetails";
import OrganisationPage from "../pages/organisations/OrganisationPage";
import LeadDetails from "../pages/LeadDetails/LeadDetails";
import AppShell from "../components/AppShell/AppShell";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth & Onboarding Routes (Full Screen) */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />

        {/* App Routes Wrapped in AppShell Sidebar & Topbar */}
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<LeadPage />} />
          <Route path="/leads/:id" element={<LeadDetails />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="/organizations" element={<OrganisationPage />} />
          <Route path="/deals" element={<Dashboard />} />
          <Route path="/tasks" element={<Dashboard />} />
          <Route path="/reports" element={<Dashboard />} />
          <Route path="/settings/*" element={<Dashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;