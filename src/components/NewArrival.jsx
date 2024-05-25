import React from 'react'
import {cardData} from '../constants/index'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import '../slick-custom.css'
import CardSlider from './CardSlider';


function NewArrival() {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 2,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 2,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }
    //     ]
    //   };
  
    return (

      <div className='flex flex-col mt-10 justify-center items-center'>
        <div className='text-center my-8'>
        <h1 className='text-3xl font-bold'>New Arrivals</h1>
        <div className='flex justify-center mt-4'>
          <a href='#' className='mx-4 text-xl text-black hover:text-gray-700'>For Men</a>
          <a href='#' className='mx-4 text-xl text-gray-500 hover:text-black'>For Women</a>
      </div>
      </div>

        
        {/* <div className='flex justify-between mb-7'> */}
                {/* <p className='text-2xl md:text-4xl font-bold'>New Arrivals</p> */}
                {/* <div>
                    <span className='text-sm md:text-lg font-semibold mx-2'>For Men</span> 
                    <span className='text-sm md:text-lg font-semibold'>For Women</span>
                </div> */}
        {/* </div> */}

            <CardSlider />

        {/* <div className='md:w-3/4 m-auto'>
            <div className="mt-20 slider-container">
            <Slider {...settings}>
                {cardData.map((d, index) => (
                    <div key={index} className="w-72 md:w-96 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md">
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
        </div> */}
    </div>
  )
}

export default NewArrival