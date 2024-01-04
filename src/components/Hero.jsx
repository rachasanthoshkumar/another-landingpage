import React from 'react'

const Hero = () => {
  return (
    <div className='flex relative'>
        <div className='ml-[96px] mt-10 w-[556px] flex flex-col gap-[80px]'>
        <p className='text-[57px] font-bold mt-10 '>A massive library of free 3D <span className='text-vio'>shapes</span></p>
        <div className='bg-white w-[411px] px-2 py-3 rounded-full flex items-center justify-between'>
        <input  className="bg-transparent text-[14px] ml-2" type="text" placeholder='your email address' />
        <button className='bg-vio text-[14px] py-1 px-4 rounded-full font-semibold text-white'>Download</button>
        </div>
      </div>
       
          <img src="src/images/Group.png" alt="" className='absolute top-3 left-[650px] w-[950px] h-[750px]'/>
 
    </div>
  )
}

export default Hero