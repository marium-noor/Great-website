import React, { useState } from 'react';
import { featuredDataMen, featuredDataWomen } from '../constants';

function Featured() {
  const [currentCollection, setCurrentCollection] = useState('men')

  const handleClick = (collection) => {
    setCurrentCollection(collection)
  }
  const dataToShow = currentCollection === 'men' ? featuredDataMen : featuredDataWomen;
  
  return (
    <div className='w-full'>
      <div className='text-center my-8'>
        <h1 className='text-3xl font-bold'>Featured Collections</h1>
        <div className='flex justify-center mt-4'>

          <a 
          className={`mx-4 text-xl ${currentCollection === 'men' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          onClick={() => handleClick('men')}
          >For Men</a>
          
          <a 
          className={`mx-4 text-xl ${currentCollection === 'women' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          onClick={() => handleClick('women')}
          >For Women</a>
        </div>
      </div>
      
      <div className='flex flex-wrap justify-center'>
        {dataToShow.map((data, index) => (
          <div key={index} className='max-w-xs m-4 hover:text-2xl'>
            <div className='relative'>
              <img src={data.image} alt="" className='w-full h-auto object-cover' />
              <div className='absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-4 text-center'>
                <p className='text-lg font-medium'>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
