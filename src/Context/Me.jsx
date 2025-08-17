// Me.jsx
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MeContext = createContext();

export const MeProvider = ({ children }) => {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  const getUser = () => {
    if (!token) return; 
    axios
      .get(`${base_url}/me`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data.user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <MeContext.Provider value={{user}}>
      {children}
    </MeContext.Provider>
  );
};
