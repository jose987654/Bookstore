import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const RetrieveUser = () => {
  const { userId, authToken } = useContext(AppContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://bookstore.toolsqa.com/Account/v1/User/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setUserData(response.data);
        setError("");
      } catch (error) {
        setError("Error retrieving user data");
      }
      setLoading(false);
    };

    fetchUser();
  }, [userId, authToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      {userData && (
        <div>
          <p>ID: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user details */}
        </div>
      )}
    </div>
  );
};

export default RetrieveUser;
