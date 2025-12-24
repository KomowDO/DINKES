import React from "react";
import "../css/structure.css";
// Pastikan path import ini sesuai struktur folder Anda
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function Structure() {
  const { language } = useLanguage();
  const t = translations[language];

  const anggota = [
    {
      img: "/assets/mas.png",
      nama: "Dr. MUGIYA WARDHANY, SE, M.Si",
      jabatan: t.role_kadis,
    },
    {
      img: "/assets/mas.png",
      nama: "NURHIDAYATULLAH, S.IP, M.Si",
      jabatan: t.role_sekdis,
    },
    {
      img: "/assets/mas.png",
      nama: "MOHAMAD MUFLIH SUTISNA, SSTP, M.AP",
      jabatan: t.role_kabid_infra,
    },
    {
      img: "/assets/mas.png",
      nama: "ANTON RIYANTO, ST, MT",
      jabatan: t.role_kabid_stats,
    },
    {
      img: "/assets/mas.png",
      nama: "RIZKY FEBRIYANTO SUNARYO, S.Kom., M.T.I",
      jabatan: t.role_kabid_egov,
    },
    {
      img: "/assets/mas.png",
      nama: "IAN CHAVIDZ RIZQIULLAH, S.STP",
      jabatan: t.role_kabid_kompub,
    },
    {
      img: "/assets/mas.png",
      nama: "MUHAMMAD IQBAL SANTOSO, A.Md.P., S.H",
      jabatan: t.role_ka_upt,
    },
  ];

  return (
    <div className="structure-section">
      <div className="container">
        {/* HEADER MOBILE & TABLET (Tampil di layar < 1200px) */}
        {/* Menggunakan d-xl-none artinya: Hilang hanya di layar Extra Large */}
        <div className="text-center mb-4 d-xl-none">
          <h2 className="fw-bold text-green-dark">{t.struct_title}</h2>
          <p className="fw-semibold text-secondary">{t.struct_subtitle}</p>
        </div>

        {/* HEADER DESKTOP (Tampil di layar >= 1200px) */}
        <div className="text-center mb-5 d-none d-xl-block header-desktop">
          <h2 className="fw-bold fs-2 mb-1" style={{ color: "#2ca29d" }}>
            {t.struct_title}
          </h2>
          <h3 className="fw-bold fs-4 text-black">{t.struct_subtitle}</h3>
        </div>

        <div className="row g-0 align-items-center">
          {/* KOLOM KIRI (Ilustrasi) */}
          {/* Menggunakan col-xl-5: Hanya ambil ruang kolom di layar XL */}
          <div className="col-xl-5 position-relative d-none d-xl-block">
            <div className="illustration-wrapper">
              {/* Teks Besar Background */}
              <h1 className="bg-text">
                Pejabat
                <br />
                Struktural
                <br />
                OPD
              </h1>

              {/* Gambar Jam */}
              <img
                src="/assets/jam.png"
                alt="Ilustrasi Tugu"
                className="illustration-img"
              />
            </div>
          </div>

          {/* KOLOM KANAN (Daftar Pejabat) */}
          {/* col-12 (default penuh) lalu col-xl-7 (sebagian di desktop besar) */}
          <div className="col-12 col-xl-7">
            <div className="officials-list-container">
              {anggota.map((item, index) => (
                <div key={index} className="official-card">
                  {/* Foto */}
                  <div className="official-img-wrapper">
                    <img
                      src={item.img}
                      alt={item.nama}
                      className="official-img"
                    />
                  </div>

                  {/* Informasi */}
                  <div className="official-info">
                    <small className="label-text">{t.label_name}</small>
                    <h5 className="official-name">{item.nama}</h5>

                    <div className="mt-2">
                      <small className="label-text">{t.label_position}</small>
                      <p className="official-role">{item.jabatan}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
