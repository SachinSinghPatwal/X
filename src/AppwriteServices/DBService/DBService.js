import { Client, Databases, Query } from "appwrite";
import conf from "../../Conf/Conf";

class DatabaseServices {
  client = new Client();
  database;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    database = new Databases(client);
  }

  async createDocument({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId,
  }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
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

  async deletePost({ slug }) {
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

  async getPost({ slug }) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite service :: getPost ::error");
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
      console.log("appwrite service :: getposts ::error");
      return false;
    }
  }
}

const databaseService = new DatabaseServices();
export default databaseService;
