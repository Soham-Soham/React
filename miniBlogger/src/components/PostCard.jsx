import React from 'react'
import databaseService from "../appwrite/database"
import parse from "html-react-parser"
import { useSelector } from 'react-redux'

function PostCard({ title, content, articleImage }) {
  return (
    <div className='p-1 flex flex-col gap-y-2 bg-white bg-opacity-20 backdrop-blur-3xl'>
      
      {/* profile photo & name */}
      <div className=' flex items-center gap-2 rounded-2xl md:p-2'>
        <img src="https://picsum.photos/200" alt="" className=' border-green-400 border-2 w-8 h-8 rounded-full' />
        <h2 className=' font-bold'>Full Name</h2>
      </div>

      {/* Posted Image */}
      <div className=' w-full h-56 rounded-lg flex justify-center'>
        <img src={databaseService.getFilePreview(articleImage)} alt={title} className=' w-fit h-full rounded-lg' />
      </div> 

      {/* Title & Description */}
      <div>
        <h1 className=' font-bold md:text-xl '>{title}</h1>
        <span className=' leading-4 font-medium text-gray-600 md:text-lg'>{parse(content)}</span>
      </div>

      {/* comments & like */}
      <div className=' flex justify-between items-center'>
        <p className=' opacity-70'>see all comments</p>
        <div className=' flex items-center gap-2 cursor-pointer'>
          <span><img src="\src\assets\icon-comments.png" alt="" width="25px" height="25px" className="filte" /></span>
          <span><img src="\src\assets\icon-like.png" alt="" width="30px" height="30px" /></span>
        </div>
      </div>

    </div>
  )
}

export default PostCard