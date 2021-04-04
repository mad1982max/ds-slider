import ProductCard from "../ProductCard/ProductCard";
import OrderButtons from "../OrderButtons/OrderButtons";
import { miniDB } from "../../Assets/db/db";
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { breakPoints } from "../../Assets/Configs/sliderConfig";
import "swiper/swiper-bundle.min.css";
import "./slider.css";

SwiperCore.use([Navigation, A11y]);

const SliderContainer = () => {
  const handleOrder = (productId) => {
    console.log("checked item:", productId);
  };

  return (
    <>
      <Swiper navigation tag="div" loop={true} breakpoints={breakPoints}>
        {miniDB.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} />
            <OrderButtons id={item.id} orderFn={handleOrder} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderContainer;
