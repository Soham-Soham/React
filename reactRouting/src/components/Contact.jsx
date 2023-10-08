import React from 'react'

function Contact() {
  return (
    <div className=' bg-black w-3/4 lg:w-2/4 h-auto mx-auto mt-5 mb-5 text-white rounded-2xl'>
       <form className=' flex flex-col p-10'>
        <div className=' flex flex-col mb-5'>
           <label htmlFor="name" className=' font-extrabold mb-1'>Full Name</label>
           <input type="text" id='name' placeholder='Enter Full name' className=' p-1 outline-0 rounded-md placeholder:italic text-black' />
        </div>
        <div className=' flex flex-col mb-5'>
           <label htmlFor="email" className=' font-extrabold mb-1'>E-mail</label>
           <input type="email" placeholder='Enter Email' className=' p-1 outline-0 rounded-md placeholder:italic text-black' />
        </div>
        <div className=' flex flex-col mb-5'>
           <label htmlFor="msg" className=' font-extrabold mb-1'>Message</label>
           <textarea type="text" placeholder='Enter Message' className=' p-1 outline-0 rounded-md placeholder:italic text-black'/>
        </div>
        <button type="submit" className=' border-2 mx-auto px-5 py-1 rounded'>Submit</button> 
       </form>
       <hr className='mb-5 opacity-50 mx-10' />
       <div className=' flex justify-evenly px-10 pb-5 gap-2'>
          <div>
            <h3 className=' font-bold'>Address</h3>
            <p className=' text-slate-400'>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h3 className=' font-bold'>Contact us</h3>
            <p className=' text-slate-400'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <h3 className=' font-bold'>Help</h3>
            <p className=' text-slate-400'>Lorem, ipsum dolor.</p>
          </div>
       </div>
    </div>
  )
}

export default Contact