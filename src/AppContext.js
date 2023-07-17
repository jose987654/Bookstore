
import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState(""); 
  const [authToken, setAuthToken] = useState(""); 
  const [books, setBooks] = useState([]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
