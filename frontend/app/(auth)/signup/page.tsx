// pages/signup.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    // try {
    //   const response = await fetch("http://127.0.0.1:8000/authentication/signup/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, username, password }),
    //   });

    //   console.log(response)

    //   if (response.ok) {
    //     // Signup successful
    //     const { token } = await response.json();
    //     // Save token in a cookie
    //     Cookies.set("token", token);
    //     // Redirect to dashboard or any other protected route
    //     // router.push("/");
    //   } else {
    //     // Signup failed
    //     console.error("Signup failed");
    //   }
    // } catch (error) {
    //   console.error("Error during signup:", error);
    // }
  };

  return (
    <div className="h-screen">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
