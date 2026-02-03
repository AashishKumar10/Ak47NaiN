import "@fortawesome/fontawesome-free/css/all.min.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FamilyTree from "./components/FamilyTree";
import Footer from "./components/Footer";
import Aashu from "./Pages/Aashu";
import Papa from "./Pages/Papa";
import Mummy from "./Pages/Mummy";
import Sister from "./Pages/Sister";
import Didi from "./Pages/Didi";
import Exploretree from "./Pages/Exploretree";
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import AllFamilys from "./AllFamily/AllFamily";
import FamilyDetail from "./Pages/FamilyDetail";
import GouravPoonia from "./AllMember/GouravPoonia"
import PapaJi from "./AllMember/PapaJi"
import JAAN from "./AllMember/JAAN"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FamilyTree />
              <Footer />
            </>
          }
        />

        <Route path="/AllFamilys" element={<AllFamilys />} />
        <Route path="/family/:id" element={<FamilyDetail />} />
        <Route path="/GouravPoonia" element={<GouravPoonia />} />
        <Route path="/PapaJi" element={<PapaJi />} />
        <Route path="/JAAN" element={<JAAN />} />

        <Route path="/Discover" element={<Aashu />} />
        <Route path="/Papa" element={<Papa />} />
        <Route path="/Mummy" element={<Mummy />} />
        <Route path="/Sister" element={<Sister />} />
        <Route path="/Didi" element={<Didi />} />
        <Route path="/Exploretree" element={<Exploretree />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

        <Route path="/FamilyTree" element={<FamilyTree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
