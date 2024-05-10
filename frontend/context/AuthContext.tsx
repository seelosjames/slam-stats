import { createContext, useState, FormEvent, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  username: string;
  // Add other properties as needed
}

interface AuthContextType {
  contextData: {
    user: User | null;
    loginUser: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    logoutUser: () => void;
  };
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  contextData: {
    user: null,
    loginUser: async (e: FormEvent<HTMLFormElement>) => { },
    logoutUser: () => { }
  },
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
 let [authTokens, setAuthTokens] = useState<{ access: string; refresh: string } | null>(null);
  let [user, setUser] = useState<User | null>(null);
  let [loading, setLoading] = useState(true);

  let loginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    const target = e.target as HTMLFormElement;
    const username = target.username.value;
    const password = target.password.value;

    console.log("Start sign in with username: " + username + " and password: " + password);

    console.log("Form Submitted");
    let response = await fetch("http://127.0.0.1:8000/authentication/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });

    let data = await response.json();
    console.log(jwtDecode(data.access));

    if (response.status === 200) {
      console.log("Response data: ", data)
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      console.log("User: ", user)
      console.log("AuthTokens: ", authTokens)
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      alert("Something went wrong!");
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/authentication/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  // useEffect(() => {
  //   if (loading) {
  //     updateToken();
  //   }

  //   let fourMinutes = 1000 * 60 * 4;

  //   let interval = setInterval(() => {
  //     if (authTokens) {
  //       updateToken();
  //     }
  //   }, fourMinutes);
  //   return () => clearInterval(interval);
  // }, [authTokens, loading]);

  return <AuthContext.Provider value={{ contextData }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
