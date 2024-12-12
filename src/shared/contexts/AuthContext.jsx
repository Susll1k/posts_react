import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: null,
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const handleAuth = (user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));

  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        handleAuth,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
