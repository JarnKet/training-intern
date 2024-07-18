import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component

// Pages
import Home from "../pages/Home";





const AllRoutes = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </Router>
  );
};

export default AllRoutes;
