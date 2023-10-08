import React from 'react'

function Services() {
  return (
   <div className='my-20'>
    <div className='text-center'>
      <h1 className=' text-2xl font-bold'>OUR SERVICES</h1>
      <p className=' text-lg text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='flex flex-col items-center m-5 gap-5 lg:flex-row lg:justify-center lg:gap-10 text-white'>
        <div className=' bg-black w-80 h-96 rounded-lg hover:shadow-lg hover:bg-white hover:text-black hover:border-2 transition duration-500 cursor-pointer'>
            <div className='m-5 '>
              <img src="src\assets\homeImg.jpg" alt="" className='rounded-lg' />
            </div>
            <div className='flex flex-col m-5 text-center'>
              <h1 className='text-xl font-bold'>Lorem, ipsum.</h1>
              <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nemo.</p>
            </div>
        </div>
        <div className=' bg-black w-80 h-96 rounded-lg hover:shadow-lg hover:bg-white hover:text-black hover:border-2 transition duration-500 cursor-pointer'>
            <div className='m-5'>
              <img src="src\assets\homeImg.jpg" alt="" className='rounded-lg' />
            </div>
            <div className='flex flex-col m-5 text-center'>
              <h1 className='text-xl font-bold'>Lorem, ipsum dolor.</h1>
              <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nemo.</p>
            </div>
        </div>
        <div className=' bg-black w-80 h-96 rounded-lg hover:shadow-lg hover:bg-white hover:text-black hover:border-2 transition duration-500 cursor-pointer'>
        <div className='m-5'>
              <img src="src\assets\homeImg.jpg" alt="" className='rounded-lg' />
            </div>
            <div className='flex flex-col m-5 text-center'>
              <h1 className='text-xl font-bold'>Lorem ipsum dolor sit.</h1>
              <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nemo.</p>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Services