import React from 'react'
import { assets } from '../../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {

const Navigate = useNavigate();

    return (
        <>
            <div className='flex  w-full justify-between items-center font-semibold'>
                <div className='flex items-center gap-4'>
                    <img onClick={()=>Navigate(-1)} className=' w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                    <img onClick={()=>Navigate(1)} className='w-8  bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
                </div>
                <div className=' flex items-center gap-4 '>
                    <p className='bg-white text-black  px-4 py-1 rounded-2xl hidden cursor-pointer md:block'> Explore premium</p>
                    <p className='bg-black px-3 py-1 rounded-2xl text-[15px] cursor-pointer'>Install app</p>
                    <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>J</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' >All</p>
                <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
                <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>

            </div>

        </>
    )
}

export default Navbar
