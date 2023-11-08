import { Client, Databases, Storage, Query, ID } from "appwrite";
import appwriteConfig from "../appwrite/appwriteConfig"

export class DatabaseService{
   client = new Client();
   databases;
   bucket;

   constructor(){
     this.client
         .setEndpoint(appwriteConfig.appwriteUrl)
         .setProject(appwriteConfig.appwriteProjectId);
     this.databases = new Databases(this.client);
     this.bucket = new Storage(this.client);
   }

   // Database service
   async createPost({title,slug,content,articleImage,status,userId}){
       try {
         return await this.databases.createDocument(
            appwriteConfig.appwriteDatabaseId,
            appwriteConfig.appwriteCollectionId,
            slug,
            {
                title,
                content,
                articleImage,
                status,
                userId,
            }
         )
       } catch (error) {
         console.log("Appwrite :: createPost :: error",error);
       }
   }

   async updatePost(slug,{title,content,articleImage,status}){
      try {
        return await this.databases.updateDocument(
            appwriteConfig.appwriteDatabaseId,
            appwriteConfig.appwriteCollectionId,
            slug,
            {
                title,
                content,
                articleImage,
                status,
            }
        )
      } catch (error) {
        console.log("Appwrite :: updatePost :: error",error);
      }
   }

   async deletePost(slug){
      try {
        await this.databases.deleteDocument(
            appwriteConfig.appwriteDatabaseId,
            appwriteConfig.appwriteCollectionId,
            slug
        )
        return true
      } catch (error) {
        console.log("Appwrite :: deletePost :: error",error);
        return false  
    }
   }

   async getPost(slug){
      try {
        return await this.databases.getDocument(
            appwriteConfig.appwriteDatabaseId,
            appwriteConfig.appwriteCollectionId,
            slug
        )
      } catch (error) {
        console.log("Appwrite :: getPost :: error",error);
        return false
      }
   }
   
   async getUserPosts(userId){ 
    try {
      return await this.databases.listDocuments(
          appwriteConfig.appwriteDatabaseId,
          appwriteConfig.appwriteCollectionId,
          [
            Query.equal('userId',userId)
          ]
      )
    } catch (error) {
      console.log("Appwrite :: getUserPosts :: error",error);
      return false
    }
 }


   async getPosts(queries=[Query.equal("status","active")]){
     try {
        return await this.databases.listDocuments(
            appwriteConfig.appwriteDatabaseId,
            appwriteConfig.appwriteCollectionId,
            queries,
        )
     } catch (error) {
        console.log("Appwrite :: getPosts :: error",error);
        return false 
    }
   }

   // storage service - file upload
   async uploadFile(file){
      try {
       return await this.bucket.createFile(
            appwriteConfig.appwriteBucketId,
            ID.unique(),
            file
        )
      } catch (error) {
        console.log("Appwrite :: uploadFile :: error",error);
        return false  
    }
   }

   async deleteFile(fileId){
     try {
        await this.bucket.deleteFile(
            appwriteConfig.appwriteBucketId,
            fileId
        )
        return true
     } catch (error) {
        console.log("Appwrite :: deleteFile :: error",error);
        return false 
    }
   }

   getFilePreview(fileId){
     try {
        return this.bucket.getFilePreview(
            appwriteConfig.appwriteBucketId,
            fileId
        )
     } catch (error) {
        console.log("Appwrite :: getFilePreview :: error",error);
     }
   }

}

const databaseService = new DatabaseService()
export default databaseService