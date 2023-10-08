import React from 'react'

function Home() {
  return (
    <div className=' flex flex-col pt-10 lg:pt-0 bg-black text-white rounded-b-lg'>
       <section className=' flex flex-wrap justify-center items-center'>
          <div className=' lg:flex-1 text-center '>
             <h1 className=' text-2xl font-bold lg:text-4xl bg-gradient-to-r from-slate-600 to-slate-200 text-transparent bg-clip-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sapiente?</h1>
          </div>
          <div className=' lg:flex-1'>
            <img src="src\assets\homeImg.jpg" alt="" />
          </div>
       </section>
       <section className=' flex flex-col justify-center items-center lg:flex-row my-5'>
           <div className='lg:flex-1 flex gap-5 lg:justify-center order-2 lg:order-1'>
             <button className=' px-12 py-3 border-2 rounded-md'>EXPLORE</button>
             <button className=' px-12 py-3 border-2 rounded-md bg-white text-black font-bold'>ABOUT US</button>
           </div>
           <div className='lg:flex-1 flex flex-col justify-center items-center my-2 order-1 lg:order-2'>
             <h1 className=' text-2xl font-semibold lg:text-4xl lg:mb-4 bg-gradient-to-bl from-slate-100 to-slate-700 bg-clip-text text-transparent'>COMING SOON!</h1>
             <div>
               <p className='text-lg font-extrabold bg-gradient-to-r from-slate-400 to-slate-100 bg-clip-text text-transparent'>12 : 54 : 33 : 07</p>
             </div>
           </div>
       </section>
    </div>
  )
}

export default Home