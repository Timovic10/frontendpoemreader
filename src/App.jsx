import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from "./pages/home/HomePage";
import SubscriptionPage from "./pages/subscription/SubscriptionPage";
import CreatePoem from "./pages/editpoem/CreatePoem";
import { AuthProvider } from "./context/authcontext/AuthContext";
import PrivateRoute from "./privateroute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<RegisterPage />}
            errorElement={
              <div>
                <p>OOOps an 404</p>
              </div>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/create" element={<CreatePoem />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
