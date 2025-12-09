import React from "react";
import "./App.css"; // Pastikan CSS ini diimport
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ServiceGrid from "./components/Services";
import TangerangNewsApp from "./components/News";
import HubungiKami from "./components/Contact";
import Structure from "./components/Structure";
import Tutorial from "./components/Tutorial";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    // --- PERBAIKAN DI SINI ---
    // Hapus class 'px-10 py-10...' dan ganti dengan 'app-layout'
    // Class 'app-layout' inilah yang membuat website ada di tengah (fixed width)
    <div className="app-layout">
      <Navbar />

      {/* Bungkus konten utama (selain Navbar & Footer) di tag main agar rapi */}
      <main>
        <HeroSection />
        <ServiceGrid />
        <TangerangNewsApp />
        <Structure />
        <Tutorial />
        <HubungiKami />
      </main>

      <Footer />
    </div>
  );
}

export default App;
