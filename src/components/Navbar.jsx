import React from 'react'

const Navbar = () => {
  return (
    <div >
         <div className='ml-[96px] mr-[136px] flex items-center  justify-between  ' >
        <img src="src/images/logo.png" alt="" className='h-[130px] w-[138px] '/>
        <div className='flex gap-10 items-center justify-between mr-[90px] text-[16px] font-semibold'>
          <p className='text-vio'>Home</p>
          <p>Products</p>
          <p>Support</p>
          <p>About</p>
        <button className='w-[93px] h-[30px] bg-vio rounded-xl text-white text-[12px]'>Quote</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar