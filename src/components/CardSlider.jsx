import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardData } from "../constants";

function CardSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "black" }}
        onClick={onClick}
      />
    );
  }


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-3/4 inset-0 mt-10">
            <Slider {...settings}>
                {cardData.map((d, index) => (
                    <div key={index} className="w-72 min-h-[350px] md:w-96 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md">
                    <img
                    src={d.image}
                      alt="Product"
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 flex flex-col">
                      <div className="flex justify-between mb-4">
                        <span className="text-lg font-semibold">{d.name}</span>
                        <span className="text-lg font-semibold">{d.price}</span>
                      </div>
                      <div className="border-t border-gray-300 my-4"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg">Quick add</span>
                        <button className="text-4xl">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                </Slider>
        </div>
  )
}

export default CardSlider;
