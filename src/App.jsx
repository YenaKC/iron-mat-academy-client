import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoachesPage from "./pages/CoachesPage";
import ClassesPage from "./pages/ClassesPage";
import TechniquesPage from "./pages/TechniquesPage";
import AddTechniquePage from "./pages/AddTechniquePage";
import EditTechniquePage from "./pages/EditTechniquePage";
import TechniqueDetailPage from "./pages/TechniqueDetailPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/techniques" element={<TechniquesPage />} />
        <Route path="/techniques/new" element={<AddTechniquePage />} />
        <Route path="/techniques/:techniqueId/edit" element={<EditTechniquePage />}/>
        <Route path="/techniques/:techniqueId" element={<TechniqueDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;