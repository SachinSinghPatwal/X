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
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(
        "error || appwriteService/Auth || createAccount error",
        error.message
      );
      return { error };
    }
  }

  async login({ email, password }) {
    try {
      return await this.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(
        "error || appwriteService/Auth || login  error",
        error.message
      );
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(
        "error || appwriteService/Auth || could'nt get getCurrentUSer error",
        error.message
      );
    }
  }

  async logOut() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      console.log(
        "error || appwriteService/Auth || logOut error",
        error.message
      );
    }
  }
}
const authService = new AuthService();
export default authService;
