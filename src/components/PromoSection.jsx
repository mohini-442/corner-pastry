import React from "react";
import AutoSlider from "./AutoSlider";

const PromoSection = () => {
  return (
    <div className="py-10">
      <div className="max-w-[1296px] px-3 mx-auto">
        <img
          src="/assets/images/image.png"
          alt="banner"
          className="rounded-2xl w-full hidden lg:block"
        />
        <img
          src="https://shop.cornerpantry.ca/cdn/shop/files/Banner_MobileVersion480x600_large.png?v=1727149616"
          alt="banner"
          className="d-block lg:hidden w-full rounded-2xl"
        />

        <AutoSlider />
      </div>
    </div>
  );
};

export default PromoSection;
