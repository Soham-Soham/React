import React from 'react'
import databaseService from '../appwrite/database'

function GridPosts({title,articleImage}) {
    return (
        <div>
            <div className=' w-50 h-40 rounded-lg flex justify-center'>
                <img src={databaseService.getFilePreview(articleImage)} alt={title} className=' w-fit h-full rounded-lg' />
            </div>
        </div>
    )
}

export default GridPosts