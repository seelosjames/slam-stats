// pages/signup.tsx
"use client";

import { useState, useContext, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/AuthContext";


const Signup: React.FC = () => {

  let { contextData } = useContext(AuthContext);
  

  return (
    <div className="h-screen">
      <h1>Sign Up</h1>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => contextData.signupUser(e)}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
