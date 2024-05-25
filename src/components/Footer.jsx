import React from 'react'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import { aboutUs, customerService } from '../constants'

function Footer() {
  return (
    <div className='bg-gray-100 p-4'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap'>
                {/* STAY IN THE KNOW DIV */}
                <div>
                    <h1 className='text-3xl md:text-4xl font-bold'>Stay in the Know</h1>
                    <p className='my-3'>Sign up to get first dibs on new launches, promos, 20% off your first purchase, and other news.</p>
                    <input type="email" placeholder='Enter email' className='px-2 py-3 w-full border-2 border-black rounded-md outline-none'/>
                    <button className='bg-black border-white border-2 text-white rounded-md w-full px-2 py-3'>Submit Email</button>
                </div>

                {/* Aboutus Customerservice */}
                <div className='flex flex-col md:flex-row md:mx-auto'>
                    <div className='p-3 w-full'>
                        <h1 className='text-xl font-bold'>About us</h1>
                        {aboutUs.map((data) => (
                            <p className=''>{data.text}</p>
                        ))}
                    </div>
                    <div className='p-3 w-full'>
                        <h1 className='text-xl font-bold'>Customer Service</h1>
                        {customerService.map((data) => (
                            <p className=''>{data.text}</p>
                        ))}
                    </div>
                </div>
                
                {/* Last section */}
                <div className='w-full my-3'>
                    <div className='w-full flex space-x-4'>
                        <Instagram /> <Facebook /> <Twitter /> <Youtube />
                    </div>
                    <div className='w-full flex flex-col my-3'>
                        <p className='text-lg mb-3'>@ 2024 All rights reserved</p>
                        <div className='text-sm'>
                            <p>Data privacy portal</p>
                            <p>Terms and Conditions</p>
                            <p>Our Privacy policy</p>
                            <p>Your Privacy Choices</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer