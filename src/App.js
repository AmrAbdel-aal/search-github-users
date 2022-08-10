import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Error from "./components/Error";
import ProtectDashboard from "./components/ProtectDashboard";
import { useAuth0 } from "@auth0/auth0-react";
import AuthWrapper from "./components/AuthWrapper";
function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectDashboard>
                <Dashboard />
              </ProtectDashboard>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
