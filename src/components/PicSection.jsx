import React from 'react';

function PicSection() {
  return (
    <div className='flex flex-col md:flex-row mt-16'>
      <div className='relative flex-1'>
        <img className='w-full h-full object-cover' src='https://www.greats.com/cdn/shop/files/Featured_Mens-Low-Top.jpg?v=1697569094' alt="" />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center'>
          <p className='text-white text-lg'>Your Favourites, Restocked</p>
          <h1 className='text-white text-2xl font-bold'>Back in Stock</h1>
          <button className="px-6 py-3 mt-4 bg-transparent text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-white border-2 border-white hover:border-white transition ease-in-out duration-150">
            Shop now
          </button>
        </div>
      </div>

      <div className='relative flex-1'>
        <img className='w-full h-full object-cover' src='https://www.greats.com/cdn/shop/files/240408-Essex-Secondary-Desktop.jpg?v=1712596337' alt="" />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center'>
          <p className='text-white text-lg'>Your Favourites, Restocked</p>
          <h1 className='text-white text-2xl font-bold'>Back in Stock</h1>
          <button className="px-6 py-3 mt-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-black hover:text-white hover:border-white transition ease-in-out duration-150">
            Shop now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PicSection;
