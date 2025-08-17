import { createContext, useState, useEffect } from "react";

export const LogedContext = createContext();

export const LogedProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogedIn(true);
    }
  }, []);



  const logout = () => {
    localStorage.removeItem("token");
    setIsLogedIn(false);
  };

  return (
    <LogedContext.Provider value={{ isLogedIn, setIsLogedIn, logout }}>
      {children}
    </LogedContext.Provider>
  );
};
