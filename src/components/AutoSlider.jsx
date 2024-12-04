import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoSlider = () => {
  // Slick Slider settings
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    infinite: true,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    arrows: false, // Hides navigation arrows
    dots: false, // Hides dots
  };

  return (
    <div className="w-full mx-auto m-5">
      <Slider {...settings}>
        <div className="px-2">
          {" "}
          <img
            alt="product_img"
            src="//shop.cornerpantry.ca/cdn/shop/files/image_2024_10_29T10_06_19_282Z_1372x797.png?v=1730196651"
            className="rounded-2xl h-[200px] w-full object-cover border-none outline-none"
          />
        </div>
        <div className="px-2">
          {" "}
          <img
            alt="product_img"
            src="//shop.cornerpantry.ca/cdn/shop/files/image_2024_11_07T08_07_39_584Z_1372x797.png?v=1730967019"
            className="rounded-2xl h-[200px] w-full object-cover border-none outline-none"
          />
        </div>
        <div className="px-2">
          {" "}
          <img
            alt="product_img"
            src="//shop.cornerpantry.ca/cdn/shop/files/image_2024_10_29T10_25_47_253Z_1372x797.png?v=1730197666"
            className="rounded-2xl h-[200px] w-full object-cover border-none outline-none"
          />
        </div>
        <div className="px-2">
          {" "}
          <img
            alt="product_img"
            src="//shop.cornerpantry.ca/cdn/shop/files/Banner_Indian_bba380dd-842e-447e-88ac-101654c260b0_1372x797.png?v=1726638022"
            className="rounded-2xl h-[200px] w-full object-cover border-none outline-none"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoSlider;
