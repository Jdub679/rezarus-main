import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
        },
        password: {
          label: "Password:",
          type: "password"
        }
      },
      async authorize(credentials, req) {
        const res = await fetch("/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
        
        if (res.ok && user) {
          return user;
        }
        return null
      }
    })
  ],

}