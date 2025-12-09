import React from "react";
import { Container } from "react-bootstrap";
import "../css/services.css";

interface ServiceItem {
  id: number;
  image: string;
  title: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    image: "/assets/PPID LOGO.png",
    title: "Layanan Komunikasi Publik",
    link: "https://ppid.tangerangkota.go.id",
  },
  {
    id: 2,
    image: "/assets/logo-kota-tangerang.png",
    title: "Website Resmi Kota Tangerang",
    link: "https://tangerangkota.go.id",
  },
  {
    id: 3,
    image: "/assets/egov.png",
    title: "Layanan EGOV",
    link: "https://egov.tangerangkota.go.id",
  },
  {
    id: 4,
    image: "/assets/statistik.png",
    title: "Layanan Statistik",
    link: "https://statistik.tangerangkota.go.id",
  },
  {
    id: 5,
    image: "/assets/tangerang_live.png",
    title: "Layanan Tangerang LIVE Room",
    link: "https://live.tangerangkota.go.id",
  },
];

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <a
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="service-link" // Class pembungkus utama
    >
      {/* BAGIAN 1: KOTAK (Hanya berisi gambar) */}
      <div className="service-icon-box">
        <img src={service.image} alt={service.title} />
      </div>

      {/* BAGIAN 2: TEKS (Di luar kotak, di bawahnya) */}
      <div className="service-title">{service.title}</div>
    </a>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <Container className="py-5">
      <div className="services-scroll-wrapper">
        {services.map((service) => (
          <div key={service.id} className="service-item-wrapper">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServicesSection;
