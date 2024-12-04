import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const AutoSlider = () => {
  const images = [
    "//shop.cornerpantry.ca/cdn/shop/files/image_2024_10_29T10_06_19_282Z_1372x797.png?v=1730196651",
    "//shop.cornerpantry.ca/cdn/shop/files/image_2024_11_07T08_07_39_584Z_1372x797.png?v=1730967019",
    "//shop.cornerpantry.ca/cdn/shop/files/image_2024_10_29T10_25_47_253Z_1372x797.png?v=1730197666",
    "//shop.cornerpantry.ca/cdn/shop/files/Banner_Indian_bba380dd-842e-447e-88ac-101654c260b0_1372x797.png?v=1726638022",
  ];

  return (
    <div className="w-full mx-auto m-5">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1094: { slidesPerView: 3.4 },
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={16}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="px-2">
            <img
              src={image}
              alt="{product_img}"
              className="rounded-2xl h-[200px] w-full object-cover border-none outline-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
