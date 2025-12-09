import React from "react";
import "../css/contact.css";

export default function HubungiKami() {
  const contactItems = [
    {
      icon: "/assets/download.png",
      title: "TANGERANG LIVE",
      subtitle: "Download Aplikasi Tangerang LIVE",
      bgColor: "bg-green-1",
      link: "https://play.google.com/store/apps/details?id=id.go.tangerangkota.tangeranglive",
    },
    {
      icon: "/assets/wa.png",
      title: "WHATSAPP",
      subtitle: "0811-1500-293",
      bgColor: "bg-green-1",
      link: "https://wa.me/6281115002932",
    },
    {
      icon: "/assets/layanan.png",
      title: "LAYANAN",
      subtitle: "0811-1500-293",
      bgColor: "bg-green-1",
      link: "tel:081115002932",
    },
    {
      icon: "/assets/sp4n.png",
      title: "LAYANAN SP4N-LAPOR",
      subtitle: "",
      bgColor: "bg-green-1",
      link: "https://sp4n.lapor.go.id/",
    },
    {
      icon: "/assets/lapor.png",
      title: "KEGAWAT DARURATAN",
      subtitle: "Emergency Call 112 (Bebas Pulsa)",
      bgColor: "bg-yellow-1",
      link: "tel:112",
    },
  ];

  const socialMedia = [
    {
      icon: <i className="bi bi-youtube fs-3 text-blue-800"></i>,
      link: "https://www.youtube.com/@dinkestangerangkota",
      colorClass: "text-blue-800",
    },
    {
      icon: <i className="bi bi-facebook fs-3 text-blue-800"></i>,
      link: "#",
      colorClass: "text-blue-800",
    },
    {
      icon: <i className="bi bi-instagram fs-3 text-blue-800"></i>,
      link: "https://www.instagram.com/dinkes.kotatangerang/",
      colorClass: "text-blue-800",
    },
    {
      icon: <i className="bi bi-twitter fs-3 text-blue-800"></i>,
      link: "https://x.com/Dinkes_tgrkota",
      colorClass: "text-blue-800",
    },
  ];

  return (
    <section className="contact-footer-section">
      <div className="contact-section-inner">
        <div className="contact-container">
          <h1 className="contact-title">Hubungi Kami</h1>

          <div className="contact-grid">
            {/* Left Column - Contact Items */}
            <div className="contact-items-column">
              <div className="contact-items-wrapper">
                {contactItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={`contact-icon ${item.bgColor}`}>
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="contact-content">
                      <h3 className="contact-item-title">{item.title}</h3>
                      {item.subtitle && (
                        <p className="contact-item-subtitle">{item.subtitle}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media Icons */}
              <div className="social-media-icons">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="social-icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    // Inline style ini dipertahankan sesuai kode Anda agar icon bisa diklik
                    style={{
                      display: "flex",
                      zIndex: 50,
                      position: "relative",
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Address & Map */}
            <div className="address-column">
              <div className="address-wrapper">
                <h2 className="address-title">Dinas Kesehatan</h2>
                <h3 className="address-subtitle">Kota Tangerang</h3>

                <address className="text-address">
                  Jl. Jend. Achmad Yani No.69, RT.001/RW.001, Sukaasih, Kec.
                  Tangerang
                  <br />
                  Kota Tangerang, Banten, Indonesia 15111
                  <br />x Telp. 021-55764955 Fax. 021-55764957
                </address>

                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14627.256890654615!2d106.635114!3d-6.169074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8ce9c0828b5%3A0x7e12baa745e6536b!2sDinas%20Kesehatan%20Kota%20Tangerang!5e1!3m2!1sen!2sid!4v1763973529399!5m2!1sen!2sid"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Dinas Kesehatan"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer sudah dihapus dari sini */}
    </section>
  );
}
