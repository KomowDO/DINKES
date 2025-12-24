import React from "react";
import "./App.css"; // Pastikan file CSS ini ada dan mengatur .app-layout
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ServiceGrid from "./components/Services"; // Pastikan Services.tsx export default-nya benar
import TangerangNewsApp from "./components/News";
import HubungiKami from "./components/Contact";
import Structure from "./components/Structure";
import Video from "./components/Video";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    // Class 'app-layout' digunakan untuk mengatur layout utama (tengah/fixed width)
    <div className="app-layout">
      <Navbar />

      {/* Konten utama dibungkus tag main */}
      <main>
        <HeroSection />
        <ServiceGrid />
        <TangerangNewsApp />
        <Structure />
        <Video />
        <HubungiKami />
      </main>

      <Footer />
    </div>
  );
}

export default App;
