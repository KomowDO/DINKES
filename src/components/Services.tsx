import React from "react";
import { Container } from "react-bootstrap";
import "../css/services.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

interface ServiceItem {
  id: number;
  image: string;
  title: string;
  link: string;
}

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <a
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="service-link"
    >
      <div className="service-icon-box">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-title">{service.title}</div>
    </a>
  );
};

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services: ServiceItem[] = [
    {
      id: 1,
      image: "/assets/PPID LOGO.png",
      title: t.service_ppid,
      link: "https://ppid.tangerangkota.go.id",
    },
    {
      id: 2,
      image: "/assets/logo-kota-tangerang.png",
      title: t.service_web,
      link: "https://tangerangkota.go.id",
    },
    {
      id: 3,
      image: "/assets/egov.png",
      title: t.service_egov,
      link: "https://egov.tangerangkota.go.id",
    },
    {
      id: 4,
      image: "/assets/statistik.png",
      title: t.service_stats,
      link: "https://statistik.tangerangkota.go.id",
    },
    {
      id: 5,
      image: "/assets/tangerang_live.png",
      title: t.service_live,
      link: "https://live.tangerangkota.go.id",
    },
  ];

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
