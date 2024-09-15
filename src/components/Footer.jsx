import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaFacebook, FaYoutube } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-black text-white font-poppins py-[50px] overflow-hidden'>
      <div className='mx-auto px-4 md:w-[80%] flex flex-col justify-center items-center'>
          <h1 className='text-[40px] font-extralight'><span className='font-semibold'>Contact</span> Information</h1>
          <span className='flex flex-col mt-[20px] text-center justify-center items-center gap-1 cursor-pointer'>
            <BiSolidPhoneCall className='text-[30px]'/>
             <p className='font-extralight text-[11px]'>(478) 352-1080</p>
            </span>
          <div className='grid grid-col-1 justify-center items-center gap-y-[40px] md:grid-cols-2 lg:grid-cols-4 gap-x-[60px] mt-[40px]'>
          
          <span className='flex flex-col hover:text-[#FFA700] hover:scale-110 transition text-center justify-center items-center gap-1 cursor-pointer'>
            <MdEmail className='text-[30px]'/>
             <p className='font-extralight text-[11px]'>blackyouthempowermentnetwork@gmail.com</p>
            </span>
            <span className='flex flex-col hover:text-[#FFA700] hover:scale-110 transition text-center justify-center items-center gap-1 cursor-pointer'>
            <FiInstagram className='text-[30px]'/>
             <p className='font-extralight text-[11px]'>blackyouthempowermentnetwork</p>
            </span>
            <span className='flex flex-col hover:text-[#FFA700] hover:scale-110 transition text-center justify-center items-center gap-1 cursor-pointer'>
            <FaFacebook className='text-[30px]'/>
             <p className='font-extralight text-[11px]'>blackyouthempowermentnetwork</p>
            </span>
            <span className='flex flex-col hover:text-[#FFA700] hover:scale-110 transition text-center justify-center items-center gap-1 cursor-pointer'>
            <FaYoutube className='text-[30px]'/>
             <p className='font-extralight text-[11px]'>blackyouthempowermentnetwork</p>
            </span>
          </div>
      </div>
    </div>
  )
}

export default Footer
