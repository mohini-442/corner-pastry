import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductSlider = () => {
  const products = [
    {
      image:
        "https://shop.cornerpantry.ca/cdn/shop/files/a0054252.webp?v=1731561388&width=533",
      title: "Garlic And Herb Pita Chips",
      time: "17 MINS",
      price: "$5.99",
    },
    {
      image:
        "https://shop.cornerpantry.ca/cdn/shop/files/21449459_front_a06__2.png?v=1731561044&width=533",
      title: "Freeyumm - Zesty Cheese - 120g",
      time: "17 MINS",
      price: "$6.49",
    },
    {
      image:
        "https://shop.cornerpantry.ca/cdn/shop/files/21416692_front_a06__2.png?v=1731561204&width=533",
      title: "Freeyumm - Pizza Cracker Bite - 120g",
      time: "17 MINS",
      price: "$6.49",
    },
    {
      image:
        "https://shop.cornerpantry.ca/cdn/shop/files/17a702ec070400244068dfd6bac4eaae12133b3970debde5fe0952484b6af338.jpg?v=1727241703&width=533",
      title: "Freeyumm - Herb & Seed - 120g",
      time: "17 MINS",
      price: "$6.49",
    },
    {
      image:
        "https://shop.cornerpantry.ca/cdn/shop/files/d49ebba4fec49ff8597d252d596c0d154544557538fa42612bafee1b2d24d578.jpg?v=1731087938&width=533",
      title: "Double Dark Chocolate",
      time: "17 MINS",
      price: "$9.99",
    },
    {
      image:
        "https://shop.cornerpantry.ca/cdn/shop/files/90780a8385d508058cf0430ce240d6d76f1252e093e5fcebbd4aeb50d27226bd.png?v=1727241543&width=533",
      title: "Double Chocolate Pasticinni Cookies",
      time: "17 MINS",
      price: "$9.60",
    },
    {
      image:
        "https://shop.cornerpantry.ca/cdn/shop/files/17a702ec070400244068dfd6bac4eaae12133b3970debde5fe0952484b6af338.jpg?v=1727241703&width=533",
      title: "Freeyumm - Herb & Seed - 120g",
      time: "17 MINS",
      price: "$6.49",
    },
  ];

  return (
    <div className="max-w-[1296px] px-3 mx-auto pt-5 pb-12">
      <div class="flex items-center justify-between py-5">
        <h2 class=" font-bold text-sm md:text-2xl  capitalize">
          Chips, Cookies &amp; Snacks
        </h2>

        <a
          href="/collections/chips-and-cookies"
          class=" font-medium text-sm md:text-xl text-[#5eab56]"
        >
          see all
        </a>
      </div>

      <div className="relative group">
        <style>
          {`
            .swiper-button-disabled {
              display: none !important;
            }
          `}
        </style>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="px-8"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border-[0.5px] border-gray-200 rounded-lg py-8 px-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-24 w-24 mx-auto object-cover mb-4"
                />
                <div class="inline-flex items-center gap-1 bg-gray-100 p-1 mt-5 rounded-sm">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0607/6511/0407/files/mins.webp?v=1721904224"
                    alt="min"
                    height="12"
                    width="12"
                  />
                  <span class="font-sans font-bold text-[10px]"> 17 MINS </span>
                </div>

                <h3 className="font-medium text-sm mb-1 line-clamp-2 h-[50px] pt-2">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between pt-12">
                  <div className="text-lg font-bold mb-2">{product.price}</div>
                  <button className="rounded-md bg-greeny/[0.1] hover:bg-[#5eab56] px-4 py-1 text-xsm md:text-sm uppercase font-semibold text-[#5eab56] hover:text-white  border border-[#5eab56] duration-200">
                    Add
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 !w-[45px] flex items-center justify-center rounded-full shadow bg-[#f6f6f6] hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronLeft className="!w-6 h-6 text-gray-600" />
        </button>
        <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10  !w-[45px] flex items-center justify-center rounded-full bg-[#f6f6f6] shadow hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="!w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
