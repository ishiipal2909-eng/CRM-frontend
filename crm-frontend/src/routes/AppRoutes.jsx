import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Onboarding from "../pages/Onboarding/Onboarding";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Onboarding" element={<Onboarding />} />

        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;