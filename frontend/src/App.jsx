import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signin } from "./components/Signin";  
import { Signup } from "./components/Signup";  
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/homepage" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
