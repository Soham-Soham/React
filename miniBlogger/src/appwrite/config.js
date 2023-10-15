import envConf from '../envconf/envConf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(envConf.appwriteUrl)
            .setProject(envConf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);    
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                envConf.appwriteDatabaseId,
                envConf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId,  
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
       try {
         return await this.databases.updateDocument(
            envConf.appwriteDatabaseId,
            envConf.appwriteCollectionId,
            slug,
            {
                title, content, featuredImage, status,
            }
         )
       } catch (error) {
           console.log("Appwrite serive :: updatePost :: error", error);
       }
    }

    async deletePost(slug){
        try {
           return await this.databases.deleteDocument(
              envConf.appwriteDatabaseId,
              envConf.appwriteCollectionId,
              slug
           )
           return true 
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
       try {
          return await this.databases.getDocument(
              envConf.appwriteDatabaseId,
              envConf.appwriteCollectionId,
              slug
          )
       } catch (error) {
          console.log("Appwrite serive :: getPost :: error", error);
          return false
       }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
           return await this.databases.listDocuments(
              envConf.appwriteDatabaseId,
              envConf.appwriteCollectionId,
              queries,
           ) 
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file Upload service

    async uploadFile(file){
       try {
          return await this.bucket.createFile(
            envConf.appwriteBucketId,
            ID.unique(),
            file
          )
       } catch (error) {
           console.log("Appwrite serive :: uploadFile :: error", error);
           return false
       }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                envConf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            envConf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service