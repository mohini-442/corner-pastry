import React from "react";
import AutoSlider from "./AutoSlider";

const PromoSection = () => {
  return (
    <div className="py-10">
      <div className="max-w-[1296px] px-3 mx-auto">
        <img
          src="/assets/images/image.png"
          alt="banner"
          className="rounded-2xl"
        />

        <AutoSlider />
      </div>
    </div>
  );
};

export default PromoSection;
