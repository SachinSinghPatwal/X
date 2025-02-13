import { Client, Account, ID } from "appwrite";
import conf from "../../Conf/Conf";
class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password, name });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("createAccount error", error.message);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("login  error", error);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("getCurrentUSer error", error);
    }
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("logOut error", error);
    }
  }
}
const authService = new AuthService();
export default authService;
