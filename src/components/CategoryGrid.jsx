import React from "react";

const CategoryGrid = () => {
  const categories = [
    {
      href: "/collections/beverages-1",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Beverages_4x_7174a8bd-dd29-4ad9-95ab-59154d0fec7c_450x450.png?v=1723810426",
      alt: "Beverages",
      label: "Beverages",
    },
    {
      href: "/collections/chocolates-and-bars",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Chocolates_Bars_4x_a2ffc7fb-fdd4-4bb5-baef-5d2af6c7909d_450x450.png?v=1723793515",
      alt: "Candies, Chocolates & Bars",
      label: "Candies, Chocolates & Bars",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Canned_Pickled_4x_5e111327-cd65-430c-a75a-f32d8ed2670b_450x450.png?v=1723793657",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Cereal_Breakfast_4x_7504c35b-4d6d-4f97-a113-119152854faa_450x450.png?v=1723793560",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Chips_Cookies_4x_6aefca2f-7bfe-45e5-8c79-40c854837e21_450x450.png?v=1723793528",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Cooking_Essentials_4x_196417d4-60f0-443b-9802-1bfb9c4c1ee6_450x450.png?v=1723793786",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Dairy_Cheese_4x_dac13ee7-236c-4c32-a9d1-e58d711329fb_450x450.png?v=1723793765",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/DriedBeans_grain_450x450.png?v=1723810446",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Fresh_Fruits_Vegs_4x_cd09c7f0-4161-4996-a742-1c1217b2c07c_450x450.png?v=1723794153",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/FrozenFood_450x450.png?v=1726120028",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/beverages-1",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Household_Cleaning_4x_3cc1aef4-f491-4a52-9770-1c3a6681bdde_450x450.png?v=1723793849",
      alt: "Beverages",
      label: "Beverages",
    },
    {
      href: "/collections/chocolates-and-bars",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Nuts_DriedFruit_Seeds_4x_798032f9-613c-4e3e-b522-9fe7997593f8_450x450.png?v=1724163421",
      alt: "Candies, Chocolates & Bars",
      label: "Candies, Chocolates & Bars",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Pasta_Noodles_4x_f31b502a-96bd-4263-8a25-888e98258ad2_450x450.png?v=1723793626",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Personal_Care_4x_8d8b9781-a45d-4226-ace7-9c06e58f7f62_450x450.png?v=1723794042",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Readytoeat_4x_7b732be2-a3f5-4496-9502-98c34dac25e8_450x450.png?v=1724003436",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Sauces_Marinades_4x_ee5ff8a5-a971-4772-a4c9-78b3f4f633a0_450x450.png?v=1723793606",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Spices_Seasonings_4x_597fb782-871c-4ff1-8223-2c1afbb12065_450x450.png?v=1723810565",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Spreads_Syrup_4x_8fddf1d6-ff3b-46a9-b9bb-7cffb3bb5019_450x450.png?v=1724163439",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/Tea_Coffee_4x_4f92e934-0abc-4755-96e8-5a9be6926a95_450x450.png?v=1723793591",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
    {
      href: "/collections/canned-and-pickled",
      imgSrc:
        "//shop.cornerpantry.ca/cdn/shop/collections/FrozenFood_4x_befdfdb4-9bd4-4d91-b0a2-d31554aa0aa2_450x450.png?v=1726046156",
      alt: "Canned & Pickled",
      label: "Canned & Pickled",
    },
  ];

  return (
    <div className="max-w-[1296px] px-3 mx-auto">
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-lg block text-center"
          >
            <a
              href={category.href}
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              <img
                width="100"
                height="100"
                loading="lazy"
                className="w-full h-full object-contain max-w-[100px] max-h-[100px] mx-auto"
                src={category.imgSrc}
                alt={category.alt}
              />
            </a>
            <p className="font-sans font-medium text-[10px] sm:text-xsm capitalize text-light-brown">
              <a
                href={category.href}
                title={category.label}
                className="inline-block"
                style={{ minWidth: "44px", minHeight: "44px" }}
              >
                {category.label}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
