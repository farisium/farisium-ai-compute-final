import { Navigate, Route, Routes } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { LegalPage } from "./pages/LegalPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/privacy"
        element={
          <LegalPage
            title="Privacy Policy"
            body="Halaman kebijakan privasi sedang disiapkan untuk deployment produksi Farisium AI Compute."
          />
        }
      />
      <Route
        path="/terms"
        element={
          <LegalPage
            title="Terms"
            body="Halaman syarat dan ketentuan sedang disiapkan untuk deployment produksi Farisium AI Compute."
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
