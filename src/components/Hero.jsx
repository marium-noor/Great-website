// import React from 'react'

// function Hero() {
//   return (
//     <div className='h-full w-full relative overflow-hidden'>
//       <div className='h-auto w-full'>
//         <video loop='loop' autoPlay='autoPlay' muted='muted' className='z-[-1] object-cover'
//         poster='//www.greats.com/cdn/shop/files/preview_images/92d8b64bd1cb4789ba9edd1d7ad4b207.thumbnail.0000000000.jpg?v=1716465709'>
//           <source src="https://cdn.shopify.com/videos/c/vp/92d8b64bd1cb4789ba9edd1d7ad4b207/92d8b64bd1cb4789ba9edd1d7ad4b207.HD-1080p-7.2Mbps-29511200.mp4" type="video/mp4"/>
//         </video>
//       </div>

//       {/* <div className='lg:hidden h-screen bg-cover w-full'>
//         <video loop='loop' autoPlay='autoPlay' muted='muted' className='z-[-1] object-cover'
//         poster='//www.greats.com/cdn/shop/files/preview_images/9b27179e870e47519f2d431be212eb0e.thumbnail.0000000000.jpg?v=1716465762'>
//           <source src="https://cdn.shopify.com/videos/c/vp/92d8b64bd1cb4789ba9edd1d7ad4b207/92d8b64bd1cb4789ba9edd1d7ad4b207.HD-1080p-7.2Mbps-29511200.mp4" type="video/mp4"/>
//         </video>
//       </div> */}

//       <div className='text-white absolute inset-0 flex items-center justify-center flex-col text-center pt-80'>
//         <h1 className='text-7xl font-bold'>25% Off Sitewide</h1>
//         <p className='w-full py-5 text-[20px]'>Our Memorial Day Sale is officially here. Use code MDW24 and enjoy 25% off everything.</p>
//         <div className='flex space-x-5'>
//         <button 
//         className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black hover:border-black border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 transition ease-in-out duration-150"
//       >Shop Men</button>
//         <button 
//       className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black hover:border-black border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 transition ease-in-out duration-150"
//       >Shop Men</button>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero


import React from 'react';

function Hero() {
  return (
    <div className='h-screen w-full relative overflow-hidden'>
      <video 
        loop 
        autoPlay 
        muted 
        className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        poster='//www.greats.com/cdn/shop/files/preview_images/92d8b64bd1cb4789ba9edd1d7ad4b207.thumbnail.0000000000.jpg?v=1716465709'
      >
        <source 
          src="https://cdn.shopify.com/videos/c/vp/92d8b64bd1cb4789ba9edd1d7ad4b207/92d8b64bd1cb4789ba9edd1d7ad4b207.HD-1080p-7.2Mbps-29511200.mp4" 
          type="video/mp4"
        />
      </video>

      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white pt-44'>
        <h1 className='text-4xl md:text-7xl font-bold'>25% Off Sitewide</h1>
        <p className='py-5 text-lg md:text-2xl'>
          Our Memorial Day Sale is officially here. Use code MDW24 and enjoy 25% off everything.
        </p>
        <div className='flex space-x-5'>
          <button 
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black hover:border-black border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 transition ease-in-out duration-150"
          >
            Shop Men
          </button>
          <button 
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black hover:border-black border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 transition ease-in-out duration-150"
          >
            Shop Women
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
