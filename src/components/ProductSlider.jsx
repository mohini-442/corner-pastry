import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper"; // Ensure this is from 'swiper' (not 'swiper/react')

const ProductSlider = () => {
  const products = [
    {
      image: "path_to_image1.jpg",
      title: "Garlic And Herb Pita Chips",
      time: "17 MINS",
      price: "$5.99",
    },
    {
      image: "path_to_image2.jpg",
      title: "Freeyumm - Zesty Cheese - 120g",
      time: "17 MINS",
      price: "$6.49",
    },
    {
      image: "path_to_image3.jpg",
      title: "Freeyumm - Pizza Cracker Bite - 120g",
      time: "17 MINS",
      price: "$6.49",
    },
    {
      image: "path_to_image4.jpg",
      title: "Freeyumm - Herb & Seed - 120g",
      time: "17 MINS",
      price: "$6.49",
    },
    {
      image: "path_to_image5.jpg",
      title: "Double Dark Chocolate",
      time: "17 MINS",
      price: "$9.99",
    },
    {
      image: "path_to_image6.jpg",
      title: "Double Chocolate Pasticinni Cookies",
      time: "17 MINS",
      price: "$9.60",
    },
  ];

  return (
    <div className="px-4">
      <h2 className="text-lg font-bold mb-4">Chips, Cookies & Snacks</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true} // Ensure navigation is enabled here
        modules={[Navigation]} // Ensure Navigation is correctly imported here
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-lg p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover mb-4"
              />
              <div className="text-sm text-gray-500 mb-1">{product.time}</div>
              <h3 className="font-medium text-base mb-1">{product.title}</h3>
              <div className="text-lg font-bold text-green-600 mb-2">
                {product.price}
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Add
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
