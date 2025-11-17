import React from "react";
import "../css/services.css";
import { Container, Row, Col } from "react-bootstrap";

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

const ServiceGrid: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const cardStyle: React.CSSProperties = {
    height: "127px",
    width: "231px",
    borderRadius: "20px",
    backgroundColor: "#EDEDED",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="text-center">
      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-dark d-flex flex-column align-items-center"
      >
        <div style={cardStyle} className=" mb-2">
          {service.image && (
            <img
              src={service.image}
              alt={service.title}
              className="img-fluid"
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                objectFit: "contain",
              }}
            />
          )}
        </div>
        <h6
          className="fw-bold text-center"
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.2",
            maxWidth: "140px",
          }}
        >
          {service.title}
        </h6>
      </a>
    </div>
  );
};

// Komponen Utama
const ServicesSection: React.FC = () => {
  return (
    <Container className="py-4">
      {/* Baris Pertama */}
      <Row className="g-4 mb-4 justify-content-between">
        {services.map((service) => (
          <Col key={service.id} xs={12} sm={6} md={4} lg={2} xl={2}>
            <ServiceGrid service={service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;
