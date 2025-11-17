import React from "react";
import "../css/hero.css"; 
import { Search, Accessibility } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      {/* Header Bar */}
      <header className="hero-header d-flex justify-content-between align-items-center px-1 py-3">
        <button className="btn-disabilitas d-flex align-items-center gap-2">
          <Accessibility className="icon-accessibility" />
          <span className="disabilitas">DISABILITAS</span>
        </button>

        <div className="search-wrapper d-flex align-items-center">
          <div className="search-input-wrapper">
            <input 
              type="text"
              placeholder="Apa yang kamu cari"
              className="search-input"
            />
          </div>
          <button className="btn-search">
            <Search className="icon-search" />
          </button>
        </div>
      </header>

      {/* Hero Section (Hanya Gambar) */}
      <section className="hero-content">
        <div className="hero-image-wrapper">
          <img
            src="/assets/laksa.png" 
            alt="Banner Laksa"
            className="hero-image img-fluid"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;