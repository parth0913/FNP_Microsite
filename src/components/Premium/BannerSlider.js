import React from "react";
import Slider from "../Slider/Slider";
import styles from "./BannerSlider.module.css"; 

const bannerItems = [
  {
    imgSrc: "images/premium-25-9-24.png",
    anchor: "https://beta.fnp.com/flowers-lp?promo=flowers_micro_desk_top_banner_1"
  },
  {
    imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/hero/blooms-25-9-24.png",
    anchor: "https://beta.fnp.com/flowers-lp?promo=flowers_micro_desk_top_banner_1"
  }
];

const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <Slider
        items={bannerItems}
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 3000,
          arrows: false,
          pagination: true
        }}
        isImgSlider={true}
        isAuto={true}
        styles={{
          slideItem: styles.slideItem,
          image: styles.image
        }}
      />
    </div>
  );
};

export default Banner;
