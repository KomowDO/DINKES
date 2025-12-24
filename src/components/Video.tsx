import React from "react";
import { Play } from "lucide-react";
import "../css/Video.css";

// Interface Data Video
interface VideoData {
  id: number;
  title: string;
  thumbnail: string;
  isMain?: boolean;
}

// DATA DUMMY TANGERANG TV (Sesuai Gambar Kiri)
const TANGERANG_TV: VideoData[] = [
  {
    id: 1,
    title: "Festival KIM Nasional 2025 di Kota Tangerang Sukses Terselenggara",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    isMain: true, // Video Utama
  },
  {
    id: 2,
    title:
      "Festival KIM Nasional 2025 di Kota Tangerang Sukses Kuatkan Literasi Digital Masyarakat",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/mqdefault.jpg",
  },
  {
    id: 3,
    title:
      "Masak dan Makan Besar, 1000 Porsi Laksa Tangerang di Culinary Day 2025",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/mqdefault.jpg",
  },
];

// DATA DUMMY PROKOPIM (Sesuai Gambar Kanan)
const PROKOPIM: VideoData[] = [
  {
    id: 4,
    title: "Perjalanan 100 Hari Sachrudin - Maryono Membangun Kota",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    isMain: true, // Video Utama
  },
  {
    id: 5,
    title: "Perjalanan 100 Hari Sachrudin - Maryono Membangun Kota Tangerang",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
  },
  {
    id: 6,
    title:
      "Wali Kota Tangerang Siap Berikan Pelayanan Terbaik dan Serap Aspirasi",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/mqdefault.jpg",
  },
];

// Komponen Kartu Video Satuan
const VideoCard = ({
  title,
  videos,
}: {
  title: string;
  videos: VideoData[];
}) => {
  const mainVideo = videos.find((v) => v.isMain);
  const listVideos = videos.filter((v) => !v.isMain);

  return (
    <div className="coverage-card h-100 d-flex flex-column">
      <div className="coverage-card-body flex-grow-1">
        {/* Header Title */}
        <h5 className="coverage-title text-center">{title}</h5>

        {/* MAIN VIDEO (BESAR) */}
        {mainVideo && (
          <div className="main-video-wrapper mb-4 position-relative">
            <img
              src={mainVideo.thumbnail}
              alt={mainVideo.title}
              className="main-thumb w-100 rounded-4"
            />
            {/* Play Button Overlay */}
            <div className="play-btn-overlay d-flex align-items-center justify-content-center">
              <div className="play-btn-circle bg-danger text-white rounded-3 d-flex align-items-center justify-content-center shadow">
                <Play fill="white" size={24} className="ms-1" />
              </div>
            </div>
            {/* Judul di atas video (Overlay Text) */}
            <div className="video-title-overlay position-absolute top-0 start-0 p-3 w-100">
              <p className="text-white fw-bold mb-0 text-shadow text-truncate">
                {mainVideo.title}
              </p>
            </div>
          </div>
        )}

        {/* LIST VIDEO (KECIL) */}
        <div className="video-list d-flex flex-column gap-3">
          {listVideos.map((video) => (
            <div
              key={video.id}
              className="d-flex gap-3 align-items-start video-list-item"
            >
              <div className="list-thumb-wrapper flex-shrink-0">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="list-thumb w-100 h-100 object-fit-cover rounded-3"
                />
              </div>
              <p className="mb-0 text-primary-dark small fw-semibold lh-sm text-truncate-2">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER BUTTON (KUNING) */}
      <div className="coverage-card-footer mt-auto">
        <button className="btn-see-more w-100 py-3 fw-bold">
          SEE MORE VIDEOS
        </button>
      </div>
    </div>
  );
};

export default function VideoCoverage() {
  return (
    <section className="py-5 bg-light-gray">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="section-header fw-bold text-primary-dark">
            Video Coverage
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {/* KARTU 1: TANGERANG TV */}
          <div className="col-md-6 col-lg-5">
            <VideoCard title="TANGERANG TV" videos={TANGERANG_TV} />
          </div>

          {/* KARTU 2: PROKOPIM */}
          <div className="col-md-6 col-lg-5">
            <VideoCard title="PROKOPIM" videos={PROKOPIM} />
          </div>
        </div>
      </div>
    </section>
  );
}
