import React, { useState } from 'react'
import '../App.css'
import { Menu, X, Search } from 'lucide-react'


function Header() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    function toggleMenu() {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
        <div className='w-full shadow-md z-40 flex flex-col'>
            <div className="h-auto flex bg-black text-white">
                <h4 className="w-full h-full m-auto uppercase animate-scroll-left text-[8px] sm:text-[10px] md:text-md lg:text-lg font-medium text-center">Shop Bestsellers</h4>
                <h4 className="w-full h-full m-auto uppercase animate-scroll-left text-[8px] sm:text-[10px] md:text-md lg:text-lg font-medium text-center">Sneaker perfection</h4>
                <h4 className="w-full h-full m-auto uppercase animate-scroll-left text-[8px] sm:text-[10px] md:text-md lg:text-lg font-medium text-center">Free shipping $100+</h4>
                <h4 className="w-full h-full m-auto uppercase animate-scroll-left text-[8px] sm:text-[10px] md:text-md lg:text-lg font-medium text-center">25% on Sidewide</h4>
                <h4 className="w-full h-full m-auto uppercase animate-scroll-left text-[8px] sm:text-[10px] md:text-md lg:text-lg font-medium text-center">Newyear 70% off</h4>
            </div>

            <div className='flex justify-around relative h-12 items-center bg-white'> 
                <div className='text-3xl font-extrabold'>GREATS</div>

                <div className='hidden lg:flex space-x-12 text-lg font-semibold'>
                    <p className='mr-3 text-xl'>New</p>
                    <p className='mr-3 text-xl'>Men</p>
                    <p className='mr-3 text-xl'>Women</p>
                    <p className='mr-3 text-xl'>Accessories</p>
                </div>

                <div className='hidden lg:flex space-x-3 z-10'>
                    <Search className='mt-2'/>
                    <input type="text" placeholder='Search here' className='w-full border-b-2 border-black outline-none' />
                </div>

                <div className="lg:hidden md:flex flex-col justify-end z-50">
                    <button onClick={toggleMenu}>
                        {mobileDrawerOpen ? <X className='text-white'/> : <Menu />}
                    </button>
                </div>
            </div>

                {mobileDrawerOpen && (
                    <div className="fixed right-0 top-0 z-40 w-full text-xl bg-black h-screen pl-12 pt-20">
                        <div className='space-x-3 my-6 flex'>
                            <Search className='mt-2 text-white'/>
                            <input type="text" placeholder='Search here' className='w-1/2 border-b-2 border-white text-white outline-none bg-black' />
                        </div>

                        <p className='py-3 text-left text-white'>New</p>
                        <p className='py-3 text-left text-white'>Men</p>
                        <p className='py-3 text-left text-white'>Women</p>
                        <p className='py-3 text-left text-white'>Accessories</p>              
                    </div>
                )
            }
    </div>
    </nav>
   
  )
}

export default Header