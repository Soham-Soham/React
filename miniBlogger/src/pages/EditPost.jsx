import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import databaseService from '../appwrite/database'
import { PostForm } from '../components'
import ReactLoading from 'react-loading'

function EditPost() {
    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        try {
            databaseService.getPost(slug).then((doc) => {
                if (doc) {
                    setPost(doc)
                } else {
                    navigate("/home")
                }
            })
        } catch (error) {
           console.log("EditPost component :: error ",error);
        }
    }, [])

    return (
        <div className=' pb-20'>
            {
                post ? <PostForm post={post} /> : <ReactLoading type='spin' color='#16a34a' height={200} width={200} delay={10} className=' opacity-20 md:opacity-30 ' />
            }
            
        </div>
    )
}

export default EditPost