// pages/login.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // try {
    //   const response = await fetch("http://127.0.0.1:8000/authentication/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (response.ok) {
    //     // Extract token from response
    //     const { token } = await response.json();

    //     // Save token in a cookie
    //     Cookies.set("token", token);

    //     // Redirect to dashboard or any other protected route
    //     router.push("/");
    //   } else {
    //     // Handle login failure
    //     console.error("Login failed");
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    // }
  };

  return (
    <div className="h-screen">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
