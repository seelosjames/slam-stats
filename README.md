# slam-stats

import React from "react"
import { createContext, useState, useEffect, FormEvent } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'next/router';

interface AuthContextType {
  contextData: {
    user: string | null;
    loginUser: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  };
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<Props> = ({ children }) => {
  let [authTokens, setAuthTokens] = useState<{ access: string; refresh: string } | null>(null);
  let [user, setUser] = useState<string | null>(null);
  let [loading, setLoading] = useState(true)
  const router = useRouter();

  let loginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const username = target.username.value;
    const password = target.password.value;

    console.log("Form Submitted");
    let response = await fetch("http://127.0.0.1:8000/authentication/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      router.push("/");
    } else {
      alert("Something went wrong!");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    router.push('/login')
  };

  let updateToken = async () => {
    let response = await fetch('http://127.0.0.1:8000/authentication/token/refresh/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':authTokens?.refresh})
    })

    let data = await response.json()
    
    if (response.status === 200){
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
    }else{
        logoutUser()
    }

    if(loading){
        setLoading(false)
    }
  }

  let contextData = {
    user: user,
    authTokens:authTokens,
    loginUser:loginUser,
    logoutUser:logoutUser,
  };

  useEffect(()=> {
    if(loading){
      updateToken()
    }

    let fourMinutes = 1000 * 60 * 4

    let interval =  setInterval(()=> {
      if(authTokens){
        updateToken()
      }
    }, fourMinutes)
    return ()=> clearInterval(interval)

  }, [authTokens, loading]);


  return <AuthContext.Provider value={{ contextData }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
