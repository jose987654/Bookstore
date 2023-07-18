import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const DeleteCreatedUser = () => {
  const { authToken, userId, setUserId } = useContext(AppContext);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState("");

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        `https://bookstore.toolsqa.com/Account/v1/User/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("User deleted:", response.data);
      setDeleted(true);
      setUserId(""); // Reset the userId in the context
      // Handle success and show a success message
    } catch (error) {
      // Handle error and show an error message
      setError("Failed to delete user");
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div>
      <h2>Delete Created User</h2>
      {deleted ? (
        <div>User deleted successfully.</div>
      ) : (
        <button type="button" onClick={handleDeleteUser}>
          Delete User
        </button>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default DeleteCreatedUser;
