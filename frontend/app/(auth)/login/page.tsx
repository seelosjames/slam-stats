// pages/login.tsx
"use client";

import { useContext, useState, FormEvent } from "react";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";


const Login: React.FC = () => {
  // const router = useRouter();

  let { contextData } = useContext(AuthContext)

  return (
    <div className="h-screen">
      <h1>Login</h1>
      {contextData.user && <p>Hello {contextData.user.username}</p>}
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => contextData.loginUser(e)}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
