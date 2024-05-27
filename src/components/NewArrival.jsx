import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardDataMen, cardDataWomen } from "../constants";

function CardSlider() {
  const [currentCollection, setCurrentCollection] = useState('men')

  const handleClick = (collection) => {
    setCurrentCollection(collection)
  }

  const dataToShow = currentCollection === 'men' ? cardDataMen : cardDataWomen;

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
    <div className='flex flex-col mt-10 justify-center items-center'>
        <div className='text-center my-8'>
          <h1 className='text-3xl font-bold'>New Arrivals</h1>
          <div className='flex justify-center mt-4'>
            <a 
            onClick={() => handleClick('men')}
            className={`text-xl mx-4 ${currentCollection === 'men' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >For Men</a>
            <a  
            onClick={() => handleClick('women')}
            className={`text-xl mx-4 ${currentCollection === 'women' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >For Women</a>
          </div>
        </div>
        <div className="w-3/4 inset-0 mt-10">
            <Slider {...settings}>
                {dataToShow.map((d, index) => (
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
                        <button className="text-4xl">+</button>
                      </div>
                    </div>
                  </div>
                ))}
                </Slider>
        </div>
      </div>

      )
}

export default CardSlider;
