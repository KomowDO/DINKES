import React from "react";
import "../css/media.css";

const Media: React.FC = () => {
  const mediaLinks = [
    {
      id: 1,
      image: "/assets/media1.png",
      title: "Media Partner 1",
      link: "https://mediapartner1.com",
    },
    {
      id: 2,
      image: "/assets/media2.png",
      title: "Media Partner 2",
      link: "https://mediapartner2.com",
    },
    {
      id: 3,
      image: "/assets/media3.png",
      title: "Media Partner 3",
      link: "https://mediapartner3.com",
    },
  ];

  return (
    <div className="media-section my-10">
      <h2 className="text-2xl font-bold mb-6">Media Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mediaLinks.map((media) => (
          <a
            key={media.id}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            className="media-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={media.image}
              alt={media.title}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{media.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Media;