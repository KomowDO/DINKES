import React, { useState, useEffect } from "react";
import { PlayCircle, AlertCircle } from "lucide-react";
import "../css/Tutorial.css";

// ================= INTERFACES =================

interface ApiVideoItem {
  id: number;
  title: string;
  url: string; // Format URL Embed: https://www.youtube.com/embed/ID_VIDEO
}

interface ApiResponse {
  status: string;
  data: ApiVideoItem[];
}

// ================= HELPER FUNCTIONS =================

const getYoutubeThumbnail = (url: string) => {
  try {
    const parts = url.split("/");
    const videoId = parts[parts.length - 1].split("?")[0];
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  } catch {
    return "https://via.placeholder.com/300x169?text=No+Thumbnail";
  }
};

// ================= COMPONENT UTAMA =================

export default function Tutorial() {
  // --- STATE ---
  const [videoList, setVideoList] = useState<ApiVideoItem[]>([]);
  const [currentVideo, setCurrentVideo] = useState<ApiVideoItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setIsLoading(true);
        setError(null); // Reset error sebelum fetch ulang

        // Pastikan endpoint ini benar
        const response = await fetch(
          "http://localhost:8080/api/video-tutorial"
        );

        if (!response.ok) {
          throw new Error(`Gagal memuat data (Status: ${response.status})`);
        }

        const result = (await response.json()) as ApiResponse;

        if (
          result.data &&
          Array.isArray(result.data) &&
          result.data.length > 0
        ) {
          setVideoList(result.data);
          setCurrentVideo(result.data[0]);
        } else {
          throw new Error("Tidak ada video tutorial yang ditemukan.");
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        if (err instanceof Error) {
          // Jika error karena koneksi (backend mati), pesannya biasanya "Failed to fetch"
          setError(
            err.message === "Failed to fetch"
              ? "Tidak dapat terhubung ke server (Backend Mati/CORS)."
              : err.message
          );
        } else {
          setError("Terjadi kesalahan yang tidak diketahui.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // ================= RENDER STATES =================

  // 1. Tampilan Loading
  if (isLoading) {
    return (
      <section
        className="tutorial-section py-5 text-center"
        style={{
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div className="spinner-border text-primary mb-3" role="status"></div>
          <p className="text-muted">Sedang memuat video...</p>
        </div>
      </section>
    );
  }

  // 2. Tampilan ERROR (PERBAIKAN DI SINI AGAR TIDAK HILANG)
  if (error) {
    return (
      <section className="tutorial-section py-5">
        <div className="container">
          <div
            className="alert alert-danger d-flex align-items-center shadow-sm rounded-3"
            role="alert"
          >
            <AlertCircle className="me-3" size={24} />
            <div>
              <h4 className="alert-heading fs-5 fw-bold mb-1">
                Gagal Memuat Video
              </h4>
              <p className="mb-0 small">{error}</p>
              <hr />
              <p className="mb-0 small fst-italic">
                Tips: Pastikan backend <code>http://localhost:8080</code> sudah
                berjalan.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 3. Tampilan Jika Data Kosong (tapi tidak error)
  if (!currentVideo) {
    return null;
  }

  // ================= RENDER UTAMA (SUCCESS) =================
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
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-blue">Tutorial Penggunaan</h2>
          <p className="text-muted">Panduan visual penggunaan aplikasi</p>
        </div>

        {/* Main Player */}
        <div className="row justify-content-center mb-4">
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
            <h4 className="mt-3 fw-bold text-dark">{currentVideo.title}</h4>
          </div>
        </div>

        {/* Playlist / Slider */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="playlist-container">
              <p className="fw-bold text-secondary mb-2 small text-uppercase ls-1">
                Daftar Video ({videoList.length})
              </p>

              <div className="d-flex gap-3 overflow-auto pb-3 px-1 playlist-scroll">
                {videoList.map((video) => (
                  <div
                    key={video.id}
                    className={`playlist-item card border-0 shadow-sm flex-shrink-0 ${
                      currentVideo.id === video.id ? "active-video" : ""
                    }`}
                    onClick={() => setCurrentVideo(video)}
                  >
                    <div className="position-relative wrapper-img">
                      <img
                        src={getYoutubeThumbnail(video.url)}
                        alt={video.title}
                        className="card-img-top object-fit-cover"
                      />
                      <div className="play-overlay d-flex align-items-center justify-content-center">
                        <PlayCircle size={32} className="text-white" />
                      </div>
                    </div>
                    <div className="card-body p-2 bg-white">
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
      </div>
    </section>
  );
}
