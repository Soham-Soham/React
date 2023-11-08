import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import databaseService from '../appwrite/database'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import parse from "html-react-parser"
import editIcon from '../assets/icon-edit.gif'
import deleteIcon from '../assets/icon-delete.gif'
import ReactLoading from 'react-loading'


function Post() {
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const { slug } = useParams()

    useEffect(() => {
        try {
            databaseService.getPost(slug).then((doc) => {
                setPost(doc)
            })
        } catch (error) {
            console.log("Post component :: error ", error);
        }

    }, [slug])

    const deletePost = () => {
        databaseService.deletePost(post.$id).then((status) => {
            if (status) {
                databaseService.deleteFile(post.articleImage);
                navigate("/home")
            }
        })
    }

    return (
        <div className=' h-screen flex justify-center items-center' >
            {post ?
                (
                    <div className='flex flex-col gap-10 rounded-xl border-2 shadow-lg'>
                        <div className=' p-2'>
                            {/* Posted Image */}
                            <div className=' w-full h-56 md:h-96 rounded-lg flex justify-center'>
                                <img src={databaseService.getFilePreview(post.articleImage)} alt={post.title} className=' w-fit h-full rounded-lg' />
                            </div>

                            {/* Title & Description */}
                            <div>
                                <h1 className=' font-bold md:text-xl '>{post.title}</h1>
                                <span className=' leading-4 font-medium text-gray-600 md:text-lg'>{parse(post.content)}</span>
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
                        <div className=' flex justify-center gap-10 mb-5'>
                            <Link to={`/edit-post/${slug}`}>
                                <button className=' border-2 md:border-4 border-green-500 hover:bg-green-500 px-10 py-2 rounded-md font-bold md:px-12 md:py-4 md:text-xl'><img src={editIcon} alt="" className='bg-blend-screen' /></button>
                            </Link>

                            <button onClick={deletePost} className='border-2 md:border-4 border-green-500 hover:bg-green-500 px-10 py-2 rounded-md font-bold md:px-12 md:py-4 md:text-xl'><img src={deleteIcon} alt="" className=' bg-blend-screen' /></button>
                        </div>

                    </div>
                ) :
                (
                    <div>
                        <ReactLoading type='spin' color='#16a34a' height={200} width={200} delay={10} className=' opacity-20 md:opacity-30 ' />
                    </div>
                )
            }
        </div>
    )
}

export default Post 