// frontend/src/App.jsx

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ServiceGrid from "./components/Services";
import TangerangNewsApp from "./components/News";
import HubungiKami from "./components/Contact";
import Structure from "./components/Structure";
import Tutorial from "./components/Tutorial";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    // 1. Kita gunakan Fragment kosong (<>) untuk membungkus semuanya
    <>
      {/* 2. Div ini SEKARANG HANYA untuk konten utama */}
      <div className="min-h-screen px-10 py-10 md:px-10 md:py-10 ">
        <Navbar />
        <HeroSection />
        <ServiceGrid />
        <TangerangNewsApp />
        <Structure />
        <Tutorial />
        <HubungiKami />
      </div>
    </>
  );
}

export default App;
