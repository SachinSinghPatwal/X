import { Client, Account, ID } from "appwrite";
import conf from "../../Conf/Conf";
class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
      .setLocale("en");
    this.account = new Account(this.client);
    this.client.headers = {
      ...this.client.headers,
      "X-Fallback-Cookies": "true",
    };
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
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log("✅ Login session created:", session);
      return session;
    } catch (error) {
      console.log("❌ login error:", error.message);
    }
  }
  async getCurrentUser() {
    try {
      const value = await this.account.get();
      return value;
    } catch (error) {
      console.log("getCurrentUSer error", error.message);
    }
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("logOut error", error.message);
    }
  }
}
const authService = new AuthService();
export default authService;
