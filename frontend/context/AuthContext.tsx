import { createContext, useState, FormEvent, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface User {
  username: string;
}

interface AuthContextType {
  contextData: {
    user: User | null;
    loginUser: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    logoutUser: () => void;
    signupUser: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  };
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  contextData: {
    user: null,
    loginUser: async (e: FormEvent<HTMLFormElement>) => {},
    logoutUser: () => {},
    signupUser: async (e: FormEvent<HTMLFormElement>) => {},
  },
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
  let [authTokens, setAuthTokens] = useState<{ access: string; refresh: string } | null>(null);
  let [user, setUser] = useState<User | null>(null);
  let [loading, setLoading] = useState(true);
  const router = useRouter();

  let signupUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const username = target.username.value;
    const password = target.password.value;
    const email = target.email.value;


    let response = await fetch("http://127.0.0.1:8000/authentication/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password, email: email }),
    });

    if (response.status === 201) {
      let response_signup = await fetch("http://127.0.0.1:8000/authentication/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      let data_signup = await response_signup.json();

      if (response_signup.status === 200) {
        setAuthTokens(data_signup);
        setUser(jwtDecode(data_signup.access));
        localStorage.setItem("authTokens", JSON.stringify(data_signup));
        router.push("/");
      } else {
        alert("Something went wrong!");
      }
    } else {
      alert("Something went wrong!");
    }
  };

  let loginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const username = target.username.value;
    const password = target.password.value;
    const email = target.email.value;

    console.log(email)

    let response = await fetch("http://127.0.0.1:8000/authentication/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password, email: email }),
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
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    router.push("/");
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
    signupUser: signupUser,
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
