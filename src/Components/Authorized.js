import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const AuthorizedEndpoint = ({ children }) => {
  const { authToken, credentials } = useContext(AppContext);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthorized = async () => {
      try {
        const response = await axios.post(
          "https://bookstore.toolsqa.com/Account/v1/Authorized",
          credentials
        );
        setAuthorized(response.data === true);
      } catch (error) {
        console.error("Error checking authorization:", error);
      }
      setLoading(false);
    };

    fetchAuthorized();
  }, [credentials]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authorized) {
    return <div>Unauthorized Access</div>;
  }

  return <div>{children}</div>;
};

export default AuthorizedEndpoint;
