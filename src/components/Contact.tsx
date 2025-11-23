import React from "react";
import "../css/contact.css";

export default function HubungiKami() {
  const contactItems = [
    {
      icon: "/assets/download.png",
      title: "TANGERANG LIVE",
      subtitle: "Download Aplikasi Tangerang LIVE",
      bgColor: "bg-green-1",
      link: "#",
    },
    {
      icon: "/assets/wa.png",
      title: "WHATSAPP",
      subtitle: "0811-1500-293",
      bgColor: "bg-green-2",
      link: "https://wa.me/6281115002932",
    },
    {
      icon: "/assets/layanan.png",
      title: "LAYANAN",
      subtitle: "0811-1500-293",
      bgColor: "bg-green-4",
      link: "tel:081115002932",
    },
    {
      icon: "/assets/sp4n.png",
      title: "LAYANAN SP4N-LAPOR",
      subtitle: "",
      bgColor: "bg-green-5",
      link: "#",
    },
    {
      icon: "/assets/lapor.png",
      title: "KEGAWAT DARURATAN",
      subtitle: "Emergency Call 112 (Bebas Pulsa)",
      bgColor: "bg-yellow-1",
      link: "#",
    },
  ];

  const socialMedia = [
    {
      icon: <i className="bi bi-youtube fs-3 text-blue-800"></i>,
      link: "#",
      colorClass: "text-blue-800",
    },
    {
      icon: <i className="bi bi-facebook fs-3 text-blue-800"></i>,
      link: "#",
      colorClass: "text-blue-800",
    },
    {
      icon: <i className="bi bi-instagram fs-3 text-blue-800"></i>,
      link: "#",
      colorClass: "text-blue-800",
    },
    {
      icon: <i className="bi bi-twitter fs-3 text-blue-800"></i>,
      link: "#",
      colorClass: "text-blue-800",
    },
  ];

  return (
    <section className="contact-footer-section">
      {/* Contact Section */}
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
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Address & Map */}
            <div className="address-column">
              <div className="address-wrapper">
                <h2 className="address-title">
                  Dinas Komunikasi dan Informatika
                </h2>
                <h3 className="address-subtitle">Kota Tangerang</h3>

                <address className="address-text">
                  Jl. Satria, RT.002/RW.001, Sukasari, Kec. Tangerang,
                  <br />
                  Kota Tangerang, Banten, Indonesia 15111
                  <br />
                  Telp. 021-55764955 Fax. 021-55764957
                </address>

                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.3408819062997!2d106.6401152789647!3d-6.171026352341869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8cfe4d01d59%3A0xc9bf83c50c061315!2sDinas%20Komunikasi%20dan%20Informatika%20Kota%20Tangerang!5e1!3m2!1sid!2sid!4v1762144536793!5m2!1sid!2sid"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Illustration */}
      <footer className="footer-image-stack">
        <img
          src="/assets/bawah.png"
          alt="Ilustrasi Kota Tangerang"
          className="footer-illustration"
        />
        <div className="footer-content-wrapper">
          <img
            src="/assets/teks.png"
            alt="Informasi Footer Pemerintah Kota Tangerang"
          />
        </div>
      </footer>
    </section>
  );
}
