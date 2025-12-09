import React, { useState, useEffect } from "react";
import {
  PlayCircle,
  AlertCircle,
  Monitor,
  Smartphone,
  BookOpen,
} from "lucide-react";
import "../css/Tutorial.css";

// ================= INTERFACES =================

interface ApiVideoItem {
  id: number;
  title: string;
  category: "Umum" | "Versi Web" | "Versi Mobile";
  url: string;
}

type EducationLevel = "SD" | "SMP";

// ================= DATA =================

const DATA_SMP: ApiVideoItem[] = [
  {
    id: 101,
    title: "Tutorial Pendaftaran Pra SPMB SMP (Dapatkan PIN)",
    category: "Umum",
    url: "https://www.youtube.com/embed/kvnNKF3_HyE",
  },
  {
    id: 102,
    title: "Jalur Afirmasi [Versi Web]",
    category: "Versi Web",
    url: "https://www.youtube.com/embed/4XPCca0MOPU",
  },
  {
    id: 103,
    title: "Jalur Domisili [Versi Web]",
    category: "Versi Web",
    url: "https://www.youtube.com/embed/1E5Eq_cZ9I8",
  },
  {
    id: 104,
    title: "Jalur Prestasi Nilai Rapor [Versi Web]",
    category: "Versi Web",
    url: "https://www.youtube.com/embed/AGxtjmgufEg",
  },
  {
    id: 105,
    title: "Jalur Prestasi Hasil Lomba [Versi Web]",
    category: "Versi Web",
    url: "https://www.youtube.com/embed/ZNvr1yFLURQ",
  },
  {
    id: 106,
    title: "Daftar Ulang [Versi Web]",
    category: "Versi Web",
    url: "https://www.youtube.com/embed/V85bJKb6QZk",
  },
  {
    id: 107,
    title: "Jalur Afirmasi [Versi Mobile]",
    category: "Versi Mobile",
    url: "https://www.youtube.com/embed/5pdjm3VwcO8",
  },
  {
    id: 108,
    title: "Jalur Domisili [Versi Mobile]",
    category: "Versi Mobile",
    url: "https://www.youtube.com/embed/J-mqWoenbMI",
  },
  {
    id: 109,
    title: "Jalur Prestasi Nilai Rapor [Versi Mobile]",
    category: "Versi Mobile",
    url: "https://www.youtube.com/embed/prBx4guk-0Y",
  },
  {
    id: 110,
    title: "Daftar Ulang [Versi Mobile]",
    category: "Versi Mobile",
    url: "https://www.youtube.com/embed/tXK-KP6mTE0",
  },
];

const DATA_SD: ApiVideoItem[] = [
  {
    id: 201,
    title: "Tutorial Pendaftaran Pra SPMB SD (Dapatkan PIN)",
    category: "Umum",
    url: "https://www.youtube.com/embed/2sRo79MFxSQ",
  },
  {
    id: 202,
    title: "Jalur Afirmasi [SD - Versi Web]",
    category: "Versi Web",
    url: "https://www.youtube.com/embed/A3qIgXbGSzM",
  },
  {
    id: 203,
    title: "Jalur Zonasi / Domisili [SD - Versi Web]",
    category: "Versi Web",
    url: "https://www.youtube.com/embed/973wsGbEQTI",
  },
  {
    id: 204,
    title: "Jalur Perpindahan Tugas [SD - Versi Web]",
    category: "Versi Web",
    url: "https://www.youtube.com/embed/IVYJABUOYz4",
  },
  {
    id: 205,
    title: "Jalur Afirmasi [SD - Versi Mobile]",
    category: "Versi Mobile",
    url: "https://www.youtube.com/embed/A3qIgXbGSzM",
  },
  {
    id: 206,
    title: "Jalur Domisili Lingkungan [SD - Versi Mobile]",
    category: "Versi Mobile",
    url: "https://www.youtube.com/embed/973wsGbEQTI",
  },
  {
    id: 207,
    title: "Jalur Domisili Umum [SD - Versi Mobile]",
    category: "Versi Mobile",
    url: "https://www.youtube.com/embed/IVYJABUOYz4",
  },
  {
    id: 208,
    title: "Daftar Ulang [SD - Versi Mobile]",
    category: "Versi Mobile",
    url: "https://www.youtube.com/embed/sFqlAXxB12Q",
  },
];

// ================= HELPERS =================

const getYoutubeThumbnail = (url: string) => {
  try {
    const parts = url.split("/");
    const videoId = parts[parts.length - 1].split("?")[0];
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  } catch {
    return "https://via.placeholder.com/300x169?text=No+Thumbnail";
  }
};

const getCategoryIcon = (category: string) => {
  if (category === "Versi Mobile")
    return <Smartphone size={14} className="me-1" />;
  if (category === "Versi Web") return <Monitor size={14} className="me-1" />;
  return <BookOpen size={14} className="me-1" />;
};

// ================= COMPONENT UTAMA =================

export default function Tutorial() {
  const [activeTab, setActiveTab] = useState<EducationLevel>("SMP");
  const [videoList, setVideoList] = useState<ApiVideoItem[]>([]);
  const [currentVideo, setCurrentVideo] = useState<ApiVideoItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = () => {
      setIsLoading(true);
      setError(null);
      setVideoList([]);

      setTimeout(() => {
        try {
          const newData = activeTab === "SMP" ? DATA_SMP : DATA_SD;
          setVideoList(newData);
          if (newData.length > 0) {
            setCurrentVideo(newData[0]);
          }
          setIsLoading(false);
        } catch (err) {
          console.error("Gagal memuat data tutorial:", err);
          setError("Terjadi kesalahan saat memuat data.");
          setIsLoading(false);
        }
      }, 600);
    };

    loadData();
  }, [activeTab]);

  if (error) {
    return (
      <section className="tutorial-section py-5">
        <div className="container">
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <AlertCircle className="me-3" size={24} />
            <div>
              <h4 className="alert-heading fs-5 fw-bold mb-1">
                Gagal Memuat Data
              </h4>
              <p className="mb-0 small">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="tutorial-section"
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        {/* HEADER & TABS */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-blue mb-3">Tutorial Penggunaan</h2>

          <div className="d-inline-flex bg-white rounded-pill shadow-sm p-1 border">
            <button
              className={`btn btn-sm rounded-pill px-4 fw-bold transition-all ${
                activeTab === "SD"
                  ? "btn-primary"
                  : "btn-light text-muted bg-transparent"
              }`}
              onClick={() => setActiveTab("SD")}
              style={{ minWidth: "120px" }}
            >
              SD
            </button>
            <button
              className={`btn btn-sm rounded-pill px-4 fw-bold transition-all ${
                activeTab === "SMP"
                  ? "btn-primary"
                  : "btn-light text-muted bg-transparent"
              }`}
              onClick={() => setActiveTab("SMP")}
              style={{ minWidth: "120px" }}
            >
              SMP
            </button>
          </div>

          <p className="text-muted mt-3 small">
            Menampilkan panduan untuk jenjang{" "}
            <span className="fw-bold text-dark">{activeTab}</span>
          </p>
        </div>

        {/* LOADING STATE */}
        {isLoading ? (
          <div className="text-center py-5" style={{ minHeight: "400px" }}>
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-2 text-muted">Memuat video {activeTab}...</p>
          </div>
        ) : (
          currentVideo && (
            <>
              {/* MAIN VIDEO PLAYER */}
              <div className="row justify-content-center mb-5">
                <div className="col-lg-10 col-xl-9">
                  <div className="ratio ratio-16x9 shadow-lg rounded-4 overflow-hidden bg-black">
                    <iframe
                      src={currentVideo.url}
                      title={currentVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 0 }}
                    ></iframe>
                  </div>
                  <div className="d-flex align-items-center mt-3 gap-2 flex-wrap">
                    <span
                      className={`badge d-flex align-items-center ${
                        currentVideo.category === "Versi Mobile"
                          ? "bg-success"
                          : currentVideo.category === "Versi Web"
                            ? "bg-primary"
                            : "bg-secondary"
                      }`}
                    >
                      {getCategoryIcon(currentVideo.category)}
                      {currentVideo.category}
                    </span>
                    <h4 className="fw-bold text-dark mb-0">
                      {currentVideo.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* PLAYLIST SLIDER (SWIPE / GESER) */}
              <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-10">
                  <div className="playlist-container">
                    <p className="fw-bold text-secondary mb-2 small text-uppercase ls-1 ms-1">
                      Daftar Video {activeTab} ({videoList.length})
                    </p>

                    {/* CONTAINER SCROLL (MENGGUNAKAN CLASS 'playlist-scroll' YANG SUDAH DI-FIX) */}
                    <div className="playlist-scroll">
                      {videoList.map((video) => (
                        <div
                          key={video.id}
                          className={`playlist-item shadow-sm ${
                            currentVideo.id === video.id ? "active-video" : ""
                          }`}
                          onClick={() => setCurrentVideo(video)}
                        >
                          {/* Gambar Thumbnail */}
                          <div className="wrapper-img">
                            <img
                              src={getYoutubeThumbnail(video.url)}
                              alt={video.title}
                            />

                            {/* Badge Kategori */}
                            <span
                              className="position-absolute top-0 end-0 badge bg-dark m-2 bg-opacity-75 rounded-1"
                              style={{ fontSize: "0.65rem" }}
                            >
                              {video.category === "Versi Mobile"
                                ? "HP"
                                : video.category === "Versi Web"
                                  ? "WEB"
                                  : "UMUM"}
                            </span>

                            {/* Overlay Play Icon */}
                            <div className="play-overlay">
                              {currentVideo.id === video.id && (
                                <PlayCircle size={32} className="text-white" />
                              )}
                            </div>
                          </div>

                          {/* Judul Video */}
                          <div className="card-body p-2">
                            <p
                              className="card-text small fw-semibold text-dark text-truncate-2 mb-0"
                              title={video.title}
                            >
                              {video.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
}
