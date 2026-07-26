import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Onboarding from "../pages/Onboarding/Onboarding";
import Signup from "../pages/Signup/Signup";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;