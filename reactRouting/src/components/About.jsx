import React from 'react'

function About() {
  return (
    <div className='flex flex-wrap w-full p-3'>
       <div className=' lg:flex-1 p-2'>
         <img src="src\assets\homeImg.jpg" alt="" />
       </div>
       <div className=' flex-1 flex flex-col justify-center px-5'>
          <div className='mb-5'>
             <h1 className=' py-2 text-4xl text-center font-bold bg-black text-white rounded'>About</h1>
          </div>
          <div>
            <p className=' text-lg font-medium text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est harum ullam blanditiis distinctio accusamus dignissimos voluptate facilis ad ducimus repellat architecto illo quaerat dolor temporibus aliquam, incidunt assumenda officiis atque vero beatae dolore sapiente exercitationem? Cum, provident sapiente voluptates est dolorum, odit asperiores possimus suscipit magni rerum recusandae, dicta nulla.</p>
          </div>
       </div>
    </div>
  )
}

export default About