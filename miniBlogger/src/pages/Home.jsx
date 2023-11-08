import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import databaseService from '../appwrite/database'

function Home() {
  const [posts, setPosts] = useState([])
  const userStatus = useSelector(state => state.auth.status)
  

  useEffect(() => {
    databaseService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])


  if (userStatus == false || posts.length == 0) {
    return (
      // <div className=' flex flex-col gap-y-5 mb-20'>
      //   <div className=' w-96 md:w-[50rem] h-auto p-2 bg-[url("src/assets/colorSplash1.jpeg")] bg-no-repeat bg-center bg-contain rounded-xl border-2 shadow-lg'>
      //     {/* PostCard Component */}
      //     <div className='p-1 flex flex-col gap-y-2 bg-white bg-opacity-20 backdrop-blur-3xl'>
      //       {/* profile photo & name */}
      //       <div className=' flex items-center gap-2 rounded-2xl md:p-2'>
      //         <img src="https://picsum.photos/200" alt="" className=' border-green-400 border-2 w-8 h-8 rounded-full' />
      //         <h2 className=' font-bold'>Full Name</h2>
      //       </div>
      //       {/* Posted Image  */}
      //       <div className=' w-full h-56 rounded-lg flex justify-center'>
      //         <img src="https://picsum.photos/600/300" alt="" className=' w-fit h-full rounded-lg' />
      //       </div>
      //       {/* Title & Description */}
      //       <div>
      //         <h1 className=' font-bold md:text-xl '>Lorem ipsum</h1>
      //         <p className=' leading-4 font-medium text-gray-600 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ea.</p>
      //       </div>
      //       {/* comments & like */}
      //       <div className=' flex justify-between items-center'>
      //         <p className=' opacity-70'>see all comments</p>
      //         <div className=' flex items-center gap-2 cursor-pointer'>
      //           <span><img src="\src\assets\icon-comments.png" alt="" width="25px" height="25px" className="filte" /></span>
      //           <span><img src="\src\assets\icon-like.png" alt="" width="30px" height="30px" /></span>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div>No Post yet!!</div>
    )
  } else {
    return (
      <div className=' flex flex-col gap-y-5 mb-20'>
        {
          posts.map((post) => (
            <div key={post.$id} className=' w-96 md:w-[50rem] h-auto p-2  bg-no-repeat bg-center bg-contain rounded-xl border-2 shadow-lg' style={{ backgroundImage: `url("src/assets/colorSplash1.jpeg")` }}>
              <PostCard {...post} />
            </div>
          ))
        }
      </div>
    )
  }

}

export default Home