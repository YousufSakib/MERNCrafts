import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Register from "./Auth/Register";
import Dashboard from "./Pages/Dashboard";
import Login from "./Auth/Login";
import { useAuth } from "./contexts/AuthProvider";

function App() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? <Register /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
