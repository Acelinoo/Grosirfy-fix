import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/landingPage";
import Daftar from "./pages/daftar";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
