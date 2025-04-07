import { Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SupplyChainForm from "./pages/SupplyChainForm";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/supply-chain" element={<SupplyChainForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
