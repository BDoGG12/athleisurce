// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { connectToDatabase, base64ToHex, hexToGuid } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 60 * 90,
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Call your C# ASP.NET Core Web API to validate the credentials
        console.log("credentials", credentials);

        const client = await connectToDatabase();
        console.log("client", client);
        const customerCollection = client
          .db("MongoAthleisurceDB")
          .collection("Athleisurce_Customers");

        const customer = await customerCollection.findOne({
          EmailAddress: credentials.email,
          Password: credentials.password,
        });

        const { _id, FirstName, LastName } = customer;

        if (customer && credentials.password === customer.Password) {
          const user = { email: _id, name: `${FirstName} ${LastName}` };
          client.close();
          return user;
        } else {
          console.log("sign in failed");
          client.close();
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      // Add token information to the session
      session.user = token.user;
      return session;
    },
    jwt: async ({ token, user }) => {
      // Add user information to the token
      if (user) {
        console.log("token", token);
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/log-in", // Custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET,
});