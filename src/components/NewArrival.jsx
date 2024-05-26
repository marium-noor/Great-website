import React from 'react'
import CardSlider from './CardSlider';

function NewArrival() {

    return (

      <div className='flex flex-col mt-10 justify-center items-center'>
        <div className='text-center my-8'>
          <h1 className='text-3xl font-bold'>New Arrivals</h1>
          <div className='flex justify-center mt-4'>
            <a href='#' className='mx-4 text-xl text-black hover:text-gray-700'>For Men</a>
            <a href='#' className='mx-4 text-xl text-gray-500 hover:text-black'>For Women</a>
          </div>
        </div>
        <CardSlider />  
      </div>
  )
}

export default NewArrival