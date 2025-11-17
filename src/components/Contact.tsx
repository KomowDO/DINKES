import React from "react";
import "../css/contact.css"; // pastikan path CSS benar

export default function HubungiKami() {
  const contactItems = [
    {
      icon: <img src="/assets/download.png" alt="Download Tangerang LIVE" />,
      title: "TANGERANG LIVE",
      subtitle: "Download Aplikasi Tangerang LIVE",
      bgColor: "bg-green-1",
      link: "#",
    },
    {
      icon: <img src="/assets/wa.png" alt="WhatsApp" />,
      title: "WHATSAPP",
      subtitle: "0811-1500-293",
      bgColor: "bg-green-2",
      link: "https://wa.me/6281115002932",
    },
    {
      icon: <img src="/assets/layanan.png" alt="layanan" />,
      title: "LAYANAN",
      subtitle: "0811-1500-293",
      bgColor: "bg-green-4",
      link: "tel:081115002932",
    },
    {
      icon: <img src="/assets/sp4n.png" alt="SP4N" />,
      title: "LAYANAN SP4N-LAPOR",
      subtitle: "",
      bgColor: "bg-green-5",
      link: "#",
    },
    {
      icon: <img src="/assets/lapor.png" alt="SP4N" />,
      title: "KEGAWAT DARURATAN",
      subtitle: "",
      bgColor: "bg-green-5",
      link: "#",
    },
  ];

  // --- Ikon dikecilkan (fs-4) dan diberi warna putih ---
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
      {/* ================= BAGIAN HUBUNGI KAMI ================= */}
      <div
        className="bg-gray-50 py-12 py-md-16 px-4 px-md-5 px-lg-6 px-xl-6 px-xxl-6"
        style={{ paddingBottom: "0" }}
      >
        <div className="container">
          <h1 className="fs-1 fs-md-1 fw-bold text-green-1 text-center mb-10 mb-md-12">
            Hubungi Kami
          </h1>

          <div className="row g-10 g-md-8">
            <div className="col-md-6 d-flex flex-column gap-4">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center gap-4 p-4 rounded-lg bg-hover-gray-100 text-decoration-none"
                >
                  <div className={`${item.bgColor} rounded-circle icon-circle`}>
                    {item.icon}
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="fs-5 fw-bold text-blue-800 group-hover-text-blue-600">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-sm text-gray-700 mt-1 mb-0">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </a>
              ))}

              <div
                className="d-flex justify-content-start gap-6 pt-6"
                style={{ paddingLeft: "26px" }} // Padding 32px Anda
              >
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white-1 rounded-circle icon-circle">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
              <h2 className="fs-4 fw-bold text-green-1">
                Dinas Komunikasi dan Informatika
              </h2>
              <h3 className="fs-4 fw-bold text-green-1 mb-4">Kota Tangerang</h3>

              <address className="text-gray-600 fs-6 mb-6 lh-base fst-normal">
                Jl. Satria, RT.002/RW.001, Sukasari, Kec. Tangerang,
                <br />
                Kota Tangerang, Banten, Indonesia 15111
                <br />
                Telp. 021-55764955 Fax. 021-55764957
              </address>

              <div
                className="w-100 rounded-xl overflow-hidden shadow-sm"
                style={{ height: "256px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.3408819062997!2d106.6401152789647!3d-6.171026352341869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8cfe4d01d59%3A0xc9bf83c50c061315!2sDinas%20Komunikasi%20dan%20Informatika%20Kota%20Tangerang!5e1!3m2!1sid!2sid!4v1762144536793!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="footer-section-inner p-0 m-0"
        style={{ marginTop: "-5rem" }}
      >
        <div className="footer-image-stack">
          <img
            src="/assets/bawah.png"
            alt="Ilustrasi Kota Tangerang"
            className="footer-illustration"
          />

          <div className="footer-content-wrapper text-center">
            <img
              src="/assets/teks.png"
              alt="Informasi Footer Pemerintah Kota Tangerang"
              className="img-fluid w-100"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          {/* Penutup footer-content-wrapper */}
        </div>
        {/* Penutup footer-image-stack */}
      </footer>
      {/* Penutup footer-section-inner */}
    </section>
  );
}
