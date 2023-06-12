import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../carosule/DeliveryItems/DeliveryItems.css";
const Carosule1 = () => {
  const ProductCarosule = [
    {
      id: 1,
      coverImage:
        "https://cdn.zeptonow.com/production///tr:w-600,ar-969-501,pr-true,f-webp,q-80/inventory/banner/33ede2a4-1dbb-4223-88ac-1d6e02764f95-Banner-carousel_(2).png",
    },
    {
      id: 2,
      coverImage:
        "https://cdn.zeptonow.com/production///tr:w-600,ar-969-501,pr-true,f-webp,q-80/inventory/banner/bc6a7e88-c29d-423d-94a7-f7a676fcd370-banner_carousel_Bengaluru_(1).png",
    },
    {
      id: 3,
      coverImage:
        "https://cdn.zeptonow.com/production///tr:w-600,ar-969-501,pr-true,f-webp,q-80/inventory/banner/99149196-4bd2-436a-ba34-06c20b7aa717-BANNER_CAROUSEL_Centrum_(2).png",
    },
    {
      id: 4,
      coverImage:
        "https://cdn.zeptonow.com/production///tr:w-600,ar-969-501,pr-true,f-webp,q-80/inventory/banner/2af12316-45ef-47d4-9fcb-c2f33c678a48-Banner_carosel_Home_Grown_brands.png",
    },
    {
      id: 5,
      coverImage:
        "https://cdn.zeptonow.com/production///tr:w-600,ar-969-501,pr-true,f-webp,q-80/inventory/banner/1b2bd5fb-bf4d-458c-909c-a09d61cff1e3-Banner_Carousel_(2).png",
    },
    {
      id: 6,
      coverImage:
        "https://cdn.zeptonow.com/production///tr:w-600,ar-969-501,pr-true,f-webp,q-80/inventory/banner/8b0db724-7725-4c80-b331-c5183a7baf3b-Storia_Banner_Carousel_(1).jpg",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      style={{ width: "100%", display: "flex", gap: 60 }}
    >
      {ProductCarosule.map((item) => {
        return (
          <div className="container" key={item.id}>
            <img
              className="images"
              src={item.coverImage}
              alt={item.id}
              style={{ width: 500 }}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Carosule1;
