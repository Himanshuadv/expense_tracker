import React from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import { Signin } from "./components/Signin";  
import { Signup } from "./components/Signup"; 
import { Home } from "./HomePage/Home" ;
import { LandingPage } from "./pages/LandingPage";
import PageNotFound from "./HomePage/ui/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
