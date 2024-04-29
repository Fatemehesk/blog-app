/* eslint-disable no-unreachable */
// import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    try {
      // Debugging: Print the URL to verify its correctness
     

      // Set the endpoint using the provided URL
      this.client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('661fbbf1f16a272337df');

      // Initialize the account object
      this.account = new Account(this.client);
      console.log("Appwrite URL:",   this.account);
    } catch (error) {
      console.error("Error setting Appwrite endpoint:", error);
    }
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
        console.log("userAccount");
        return this.login({email, password });
      } else {
        console.log("no userAccount");
        return userAccount;
      }
    } catch (error) {
      console.log(error,"error in create account");
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("appwrite service ::", error);
      throw error;
    }
    return null;
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser() :: ", error);
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout() :: ", error);
    }
  }
}

const authService = new AuthService();
export default authService;
