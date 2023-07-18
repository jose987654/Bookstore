
import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState(""); 
  const [authToken, setAuthToken] = useState(""); 
  const [books, setBooks] = useState([]);
  const [credentials, setCredentials] = useState({ userName: "", password: "" });

  return (
    <AppContext.Provider
      
        value={{
          userId,
          setUserId,
          username,
          setUsername,
          authToken,
          setAuthToken,
          books,
          setBooks,
          credentials,
          setCredentials,        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
