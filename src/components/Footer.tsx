import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* 1. GAMBAR ILUSTRASI KOTA (Pastikan file footer-city.jpg ada) */}
      <div className="footer-illustration-wrapper">
        <img
          src="/assets/bawah.png"
          alt="Ilustrasi Kota Tangerang"
          className="footer-city-img"
        />
      </div>

      {/* 2. KONTEN UTAMA (Hijau) */}
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-row">
            {/* KOLOM 1: POWERED BY & ALAMAT */}
            <div className="footer-col">
              <p className="label-small">Powered by</p>
              <h2 className="brand-title">tangerangkota.go.id</h2>

              <p className="address-text">
                <strong>Situs Resmi Pemerintah Kota Tangerang</strong>
                <br />
                Jl. Satria Sudirman No. 1 Lt. IV Kota Tangerang 15111
                <br />
                redaksi@tangerangkota.go.id
              </p>

              {/* Badge Kominfo (Merah) */}
              <img
                src="/assets/terdaftar.png"
                alt="Terdaftar Sistem Elektronik Kominfo"
                className="kominfo-badge"
              />
            </div>

            {/* KOLOM 2: KANAL INFORMASI */}
            <div className="footer-col">
              <h3 className="footer-heading">Kanal Informasi Resmi Lainnya</h3>
              <ul className="channel-list">
                <li>
                  <i className="bi bi-instagram"></i>
                  <a
                    href="https://instagram.com/tangerangkota"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @tangerangkota
                  </a>
                </li>
                <li>
                  <i className="bi bi-instagram"></i>
                  <a
                    href="https://instagram.com/prokopimkotatangerang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @prokopimkotatangerang
                  </a>
                </li>
                <li>
                  <i className="bi bi-instagram"></i>
                  <a
                    href="https://instagram.com/tangerangtv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @tangerangtv
                  </a>
                </li>
                <li>
                  <i className="bi bi-twitter"></i>
                  <a
                    href="https://twitter.com/KotaTangerang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @KotaTangerang
                  </a>
                </li>
                <li>
                  <i className="bi bi-facebook"></i>
                  <a
                    href="https://facebook.com/KotaTangerang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    KotaTangerang
                  </a>
                </li>
                <li>
                  <i className="bi bi-youtube"></i>
                  <a
                    href="https://youtube.com/tangerangtv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tangerang TV
                  </a>
                </li>
              </ul>
            </div>

            {/* KOLOM 3: PENGUNJUNG */}
            <div className="footer-col">
              <h3 className="footer-heading">Pengunjung</h3>
              <ul className="stats-list">
                <li>
                  <span className="stat-label">Pengunjung hari ini</span>
                  <span className="stat-value">: 1.639</span>
                </li>
                <li>
                  <span className="stat-label">Pengunjung online</span>
                  <span className="stat-value">: 43</span>
                </li>
                <li>
                  <span className="stat-label">Total pengunjung</span>
                  <span className="stat-value">: 523.012</span>
                </li>
              </ul>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-copyright">
            <p>
              &copy; Copyright {new Date().getFullYear()} - Pemerintah Kota
              Tangerang
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
