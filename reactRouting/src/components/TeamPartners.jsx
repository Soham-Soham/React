import React from 'react'

function TeamPartners() {
  return (
    <div className='flex flex-col mt-5'>
      <div>
        <h1 className=' text-center text-2xl font-bold'>MEET OUR TEAM</h1>
      </div>
      <div className=' flex flex-col justify-center items-center gap-5 p-10 lg:grid lg:grid-cols-2 lg:place-items-center'>
         <div className=' w-96 h-40 flex justify-center items-center gap-3 hover:shadow-lg rounded-md border-2  hover:border-0  transition duration-300'>
           <div className=' flex-1 p-1 '>
             <img src="src\assets\homeImg.jpg" alt="" className='rounded-md'/>
           </div>
           <div className=' flex-1'>
              <h1 className=' font-bold mb-2'>Lorem, ipsum dolor</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           </div>
         </div>
         <div className=' w-96 h-40 flex justify-center items-center gap-3 hover:shadow-lg rounded-md border-2  hover:border-0  transition duration-300'>
           <div className=' flex-1 p-1'>
             <img src="src\assets\homeImg.jpg" alt="" className='rounded-md'/>
           </div>
           <div className=' flex-1'>
              <h1 className=' font-bold mb-2'>Lorem, ipsum dolor</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           </div>
         </div>
         <div className=' w-96 h-40 flex justify-center items-center gap-3 hover:shadow-lg rounded-md border-2  hover:border-0  transition duration-300'>
           <div className=' flex-1 p-1'>
             <img src="src\assets\homeImg.jpg" alt="" className='rounded-md'/>
           </div>
           <div className=' flex-1'>
              <h1 className=' font-bold mb-2'>Lorem, ipsum dolor</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           </div>
         </div>
         <div className=' w-96 h-40 flex justify-center items-center gap-3 hover:shadow-lg rounded-md border-2  hover:border-0  transition duration-300'>
           <div className=' flex-1 p-1'>
             <img src="src\assets\homeImg.jpg" alt="" className='rounded-md'/>
           </div>
           <div className=' flex-1'>
              <h1 className=' font-bold mb-2'>Lorem, ipsum dolor</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           </div>
         </div>
      </div>

      <div>
        <div>
           <h1 className='text-center text-2xl font-bold'>OUR PARTNERS</h1>
        </div>
        <div className='mt-5'>
          <marquee behavior="" direction="left">
             <div className=' flex gap-40'>
             <div className=' px-16 py-2 border-2 font-semibold text-xl italic rounded-tl-3xl rounded-br-3xl'>lorem</div>
             <div className=' px-16 py-2 border-2 font-semibold text-xl italic rounded-tl-3xl rounded-br-3xl'>lorem</div>
             <div className=' px-16 py-2 border-2 font-semibold text-xl italic rounded-tl-3xl rounded-br-3xl'>lorem</div>
             <div className=' px-16 py-2 border-2 font-semibold text-xl italic rounded-tl-3xl rounded-br-3xl'>lorem</div>
             <div className=' px-16 py-2 border-2 font-semibold text-xl italic rounded-tl-3xl rounded-br-3xl'>lorem</div>
             <div className=' px-16 py-2 border-2 font-semibold text-xl italic rounded-tl-3xl rounded-br-3xl'>lorem</div>
             <div className=' px-16 py-2 border-2 font-semibold text-xl italic rounded-tl-3xl rounded-br-3xl'>lorem</div>
             </div>
          </marquee>
        </div>
      </div>
    </div>
  )
}

export default TeamPartners