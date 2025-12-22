import React, { useState, useEffect } from "react";
import {
  PlayCircle,
  AlertCircle,
  Monitor,
  Smartphone,
  BookOpen,
  RefreshCw,
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

// ================= HELPERS =================

const getEmbedUrl = (url: string) => {
  if (!url) return "";
  if (url.includes("/embed/")) return url;

  let videoId = "";

  try {
    if (url.includes("youtu.be")) {
      videoId = url.split("/").pop()?.split("?")[0] || "";
    } else if (url.includes("v=")) {
      const urlObj = new URL(url);
      videoId = urlObj.searchParams.get("v") || "";
    }
  } catch {
    // FIX 1: Menghapus (e) agar tidak kena rule 'unused-vars'
    console.error("Gagal memparsing URL video:", url);
    return url;
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const getYoutubeThumbnail = (url: string) => {
  try {
    let videoId = "";
    if (url.includes("youtu.be")) {
      videoId = url.split("/").pop()?.split("?")[0] || "";
    } else if (url.includes("v=")) {
      const urlObj = new URL(url);
      videoId = urlObj.searchParams.get("v") || "";
    } else if (url.includes("/embed/")) {
      videoId = url.split("/embed/")[1].split("?")[0];
    }

    if (!videoId)
      return "https://via.placeholder.com/300x169?text=No+Thumbnail";

    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  } catch {
    return "https://via.placeholder.com/300x169?text=Error";
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
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchVideos = async () => {
      setIsLoading(true);
      setError(null);
      setVideoList([]);

      try {
        // GANTI URL INI DENGAN URL BACKEND YANG SESUAI
        const BASE_API_URL = "https://api.websitekamu.com/tutorials";
        const endpoint = `${BASE_API_URL}?level=${activeTab}`;

        const response = await fetch(endpoint, {
          signal,
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(
            `Server Error: ${response.status} ${response.statusText}`
          );
        }

        const rawData = await response.json();

        if (!Array.isArray(rawData)) {
          throw new Error("Format data dari backend bukan Array");
        }

        // Mapping Data
        // Menggunakan Record<string, any> untuk menghindari 'Unexpected any'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedData: ApiVideoItem[] = rawData.map((item: any) => ({
          id: item.id,
          title: item.title, // Sesuaikan dengan response backend
          category: item.category, // Sesuaikan dengan response backend
          url: item.url, // Sesuaikan dengan response backend
        }));

        setVideoList(formattedData);

        if (formattedData.length > 0) {
          setCurrentVideo(formattedData[0]);
        } else {
          setCurrentVideo(null);
        }
      } catch (err: unknown) {
        // FIX 2: Menggunakan 'unknown' dan 'instanceof Error'
        if (err instanceof Error) {
          if (err.name !== "AbortError") {
            console.error("Fetch Error:", err);
            setError(err.message || "Gagal menghubungi server.");
          }
        } else {
          // Fallback jika error bukan standard Error object
          console.error("Unknown Error:", err);
          setError("Terjadi kesalahan yang tidak diketahui.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();

    return () => controller.abort();
  }, [activeTab]);

  if (error) {
    return (
      <section className="tutorial-section py-5">
        <div className="container">
          <div
            className="alert alert-danger shadow-sm border-0 d-flex align-items-center"
            role="alert"
          >
            <AlertCircle className="me-3 flex-shrink-0" size={24} />
            <div>
              <h4 className="alert-heading fs-6 fw-bold mb-1">
                Gagal Memuat Data
              </h4>
              <p className="mb-0 small opacity-75">{error}</p>
              <button
                className="btn btn-sm btn-outline-danger mt-2 d-flex align-items-center gap-2"
                onClick={() =>
                  setActiveTab((prev) => (prev === "SD" ? "SD" : "SMP"))
                }
              >
                <RefreshCw size={12} /> Coba Lagi
              </button>
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
          <div
            className="text-center py-5 d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3 text-muted small">
              Sedang mengambil data video...
            </p>
          </div>
        ) : currentVideo ? (
          <>
            {/* MAIN VIDEO PLAYER */}
            <div className="row justify-content-center mb-5">
              <div className="col-lg-10 col-xl-9">
                <div className="ratio ratio-16x9 shadow-lg rounded-4 overflow-hidden bg-black">
                  <iframe
                    src={getEmbedUrl(currentVideo.url)}
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 0 }}
                  ></iframe>
                </div>
                <div className="d-flex align-items-center mt-3 gap-2 flex-wrap">
                  <span
                    className={`badge d-flex align-items-center py-2 px-3 ${
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

            {/* PLAYLIST SCROLL */}
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-10">
                <div className="playlist-container">
                  <p className="fw-bold text-secondary mb-3 small text-uppercase ls-1 ms-1 border-bottom pb-2">
                    Daftar Video {activeTab} ({videoList.length})
                  </p>

                  <div className="playlist-scroll pb-3">
                    {videoList.map((video) => (
                      <div
                        key={video.id}
                        className={`playlist-item card border-0 shadow-sm ${currentVideo.id === video.id ? "active-video ring-2 ring-primary" : ""}`}
                        onClick={() => setCurrentVideo(video)}
                        style={{ cursor: "pointer", transition: "all 0.2s" }}
                      >
                        <div className="wrapper-img position-relative">
                          <img
                            src={getYoutubeThumbnail(video.url)}
                            alt={video.title}
                            className="card-img-top"
                            style={{ objectFit: "cover", height: "100%" }}
                          />

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

                          <div className="play-overlay d-flex align-items-center justify-content-center">
                            {currentVideo.id === video.id && (
                              <PlayCircle
                                size={32}
                                className="text-white drop-shadow"
                              />
                            )}
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
          </>
        ) : (
          <div className="text-center py-5">
            <div className="text-muted mb-3">
              <Monitor size={48} className="opacity-25" />
            </div>
            <h5 className="fw-bold text-secondary">Belum Ada Video</h5>
            <p className="text-muted small">
              Video tutorial untuk kategori ini belum tersedia.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
