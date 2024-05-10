import { createContext, useState, useContext, FormEvent } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  contextData: {
    user: string;
    loginUser: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  };
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext({
  contextData: {
    user: null,
    loginUser: async (e: FormEvent<HTMLFormElement>) => {},
  },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(null);
  let [user, setUser] = useState(null);

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
    console.log(jwtDecode(data.access));

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      // localStorage.setItem("authTokens", JSON.stringify(data));
      // history.push("/");
    } else {
      alert("Something went wrong!");
    }
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
  };

  return <AuthContext.Provider value={{ contextData }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
