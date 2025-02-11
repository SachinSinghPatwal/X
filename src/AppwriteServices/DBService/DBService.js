import { Client, Databases, Query, ID } from "appwrite";
import conf from "../../Conf/Conf";

class DatabaseServices {
  client = new Client();
  database;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
  }

  async createPost({ slug, title, content, featuredImage, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug + ID.unique(),
        {
          title,
          content,
          featuredImage,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite service :: createpost ::error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite service :: updatepost ::error");
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite service :: deletepost ::error");
      return false;
    }
  }

  async getPost(slug) {
    console.log(slug);
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite service :: getPost ::", error);
      return false;
    }
  }

  async getAllPost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite service :: getAllPosts ::error");
      return false;
    }
  }
}

const databaseService = new DatabaseServices();
export default databaseService;
