import React from "react";
import "../css/Tutorial.css";

export default function Tutorial() {
  const playlistSrc =
    "https://www.youtube.com/embed/V85bJKb6QZk?playlist=5pdjm3VwcO8,J-mqWoenbMI,PM81jL-T6pU,prBx4guk-0Y,tXK-KP6mTE0,AGxtjmgufEg,ZNvr1yFLURQ,1E5Eq_cZ9I8,4XPCca0MOPU";

  return (
    <section className="tutorial-section">
      <div className="container-md">
        <div className="video-responsive-wrapper">
          <iframe
            src={playlistSrc}
            title="Tutorial PPDB Online Kota Tangerang"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
