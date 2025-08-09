"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

import burgerBg from "../../../public/images/burger-bg.png";
import pizza from "../../../public/images/pizza.png";
import tacos from "../../../public/images/tacos.png";

const banners = [
  {
    id: 1,
    image: burgerBg,
    text: "🔥 70% OFF on Burgers!",
  },
  {
    id: 2,
    image: pizza,
    text: "🍕 Buy 1 Get 1 Free Pizza",
  },
  {
    id: 3,
    image: tacos,
    text: "🌮 Tacos Starting at $2.99",
  },
];

const DiscountBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="w-full bg-gray-900">
      <Slider {...settings} className="w-full">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative w-full h-[400px] md:h-[500px]" // height set here
          >
            <Image
              src={banner.image}
              alt="Discount Banner"
              fill
              className="object-cover rounded-none" // No need height here
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-3xl md:text-6xl font-bold text-amber-400">
                {banner.text}
              </h2>
              <p className="mt-4 text-white text-lg md:text-2xl">
                Limited Time Offer – Order Now!
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default DiscountBanner;
