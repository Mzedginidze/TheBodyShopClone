import { createContext, useState, useEffect } from "react";
import { getItemWithExpiration } from "../services/getItemWithExpiration";

const AuthToken = createContext();

const AuthTokenProvider = ({ children }) => {
  const data = localStorage.getItem("access_token");
  let json = "";
  if (data) {
    json = JSON.parse(data).value;
  }

  const [token, setToken] = useState(json);

  useEffect(() => {
    const storedData = getItemWithExpiration("access_token");

    if (storedData) {
      setToken(storedData);
    }
  }, []);

  return (
    <AuthToken.Provider value={{ token, setToken }}>
      {children}
    </AuthToken.Provider>
  );
};
export { AuthToken, AuthTokenProvider };
