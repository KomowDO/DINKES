import React from "react";
import "../css/structure.css";

const anggota = [
  {
    img: "/assets/mas.png",
    nama: "Dr. MUGIYA WARDHANY, SE, M.Si",
    jabatan: "Kepala Dinas Komunikasi dan Informatika",
  },
  {
    img: "/assets/mas.png",
    nama: "NURHIDAYATULLAH, S.IP, M.Si",
    jabatan: "Sekretaris Dinas Komunikasi dan Informatika",
  },
  {
    img: "/assets/mas.png",
    nama: "MOHAMAD MUFLIH SUTISNA, SSTP, M.AP",
    jabatan:
      "Kepala Bidang Sarana dan Prasarana TIK dan Persandian Dinas Komunikasi dan Informatika",
  },
  {
    img: "/assets/mas.png",
    nama: "ANTON RIYANTO, ST, MT",
    jabatan:
      "Kepala Bidang Statistik dan Pemberdayaan TIK Dinas Komunikasi dan Informatika",
  },
  {
    img: "/assets/mas.png",
    nama: "RIZKY FEBRIYANTO SUNARYO, S.Kom., M.T.I",
    jabatan:
      "Kepala Bidang Pengembangan eGovernment Dinas Komunikasi dan Informatika",
  },
  {
    img: "/assets/mas.png",
    nama: "IAN CHAVIDZ RIZQIULLAH, S.STP",
    jabatan:
      "Kepala Bidang Diseminasi Informasi dan Komunikasi Publik Dinas Komunikasi dan Informatika",
  },
  {
    img: "/assets/mas.png",
    nama: "MUHAMMAD IQBAL SANTOSO, A.Md.P., S.H",
    jabatan:
      "Kepala UPT Pengelola Ruang Kendali Kota Dinas Komunikasi dan Informatika",
  },
];

export default function Structure() {
  return (
    <div className="container-fluid px-3 px-md-4 bg-green-light">
      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-green-dark fw-bold fs-3 fs-md-1">
          Daftar Pejabat Struktural
        </h1>
        <p className="fw-semibold fs-5 fs-md-3">
          Dinas Komunikasi dan Informatika
        </p>
      </div>

      {/* ROW UTAMA */}
      <div className="row g-4 structure-row">
        {/* KOLOM KIRI */}
        <div className="col-12 col-lg-4 d-flex">
          <div className="image-text-container">
            <div className="overlay-text">
              Pejabat{"\n"}Struktural{"\n"}OPD
            </div>
            <img src="/assets/jam.png" alt="Gambar Jam" />
          </div>
        </div>

        {/* KOLOM KANAN (SCROLL AREA) */}
        <div className="col-12 col-lg-8 d-flex">
          <div className="custom-scrollbar w-100">
            {anggota.map((item, index) => (
              <div
                key={index}
                className={`d-flex align-items-center p-3 mb-3 member-card ${
                  index % 2 === 0 ? "bg-green-card-light" : "bg-green-card-alt"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.nama}
                  className="member-img me-3"
                />
                <div className="flex-grow-1">
                  <p className="text-secondary mb-0 small">Nama:</p>
                  <h2 className="text-green-title fw-bold mb-1">{item.nama}</h2>
                  <p className="text-secondary mb-0 small">Jabatan:</p>
                  <h3 className="text-green-jabatan mb-0">{item.jabatan}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
