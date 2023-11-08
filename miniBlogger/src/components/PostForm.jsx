import React, { useCallback, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { Button, Input, RTE, Select } from "./index"
import databaseService from '../appwrite/database'
import { useNavigate } from 'react-router-dom'

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {
        
        if (post) {
            const file = data.image[0] ? await databaseService.uploadFile(data.image[0]) : null;
            if (file) {
                databaseService.deleteFile(post.articleImage)
            }

            const updatedPost = await databaseService.updatePost(post.$id, {
                ...data,
                articleImage: file ? file.$id : undefined,
            })
            if (updatedPost) {
                navigate("/home")
            }

        } else {
            const file = await databaseService.uploadFile(data.image[0])
            if (file) {
                const fileId = file.$id
                data.articleImage = fileId
                const createdPost = await databaseService.createPost({ ...data, userId: userData.$id })
                if (createdPost) {
                    navigate("/home")
                }
            }

        }
    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value == "string") 
           return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
        
        return "";
    },[])

    useEffect(()=>{
        const subscription = watch((value,{ name })=>{
            if(name === "title"){
                setValue("slug", slugTransform(value.title),{ shouldValidate:true })
            }
        })

        return () => subscription.unsubscribe();
    },[watch,slugTransform,setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className=' p-2 flex flex-col'>
            <Input
                label="Title :"
                placeholder="Title"
                {...register("title", { required: true })}
            />

            <Input
                label="Slug :"
                placeholder="slug"
                {...register("slug", { required: true })}
                onInput = {(e)=>{
                    setValue("slug",slugTransform(e.currentTarget.value),{ shouldValidate:true })
                }}
            /> 

            <RTE label="Content :" control={control} defaultValue={getValues("content")} />

            <Input
                label="Image :"
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />

            {
                post && (
                    <div className=' my-2 md:h-96 overflow-hidden'>
                        <img src={databaseService.getFilePreview(post.articleImage)} alt={post.title} className=' rounded-md md:h-full' />
                    </div>
                )
            }

            <Select
                label="Status :"
                options={["active", "inactive"]}
                className=" border-2 ml-2 rounded-md px-2 py-1 md:py-2 text-xl font-medium"
                {...register("status", { required: true })}
            />

            <Button type='submit' className={post ? "font-extrabold mt-5 border-2 p-2 text-lg border-orange-500 hover:bg-orange-500 hover:text-white md:text-2xl" : " font-extrabold mt-5 border-2 p-2 text-lg border-green-500 hover:bg-green-500 hover:text-white md:text-2xl"} >
                {post ? "Update" : "Submit"}
            </Button>

        </form>
    )
}

export default PostForm