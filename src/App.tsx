import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Nopage } from "./pages";
import { StarryBackground, Navbar, Footer } from "./components";

function App() {
  return (
    <>
      <StarryBackground />
      <Navbar />
      <div className="min-h-screen bg-transparent text-gray-100">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
