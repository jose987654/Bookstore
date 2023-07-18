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

  const RetrieveAllBooks = () => {
    window.location.href = "/RetrieveAllBooks";
  };
  const  RetrieveSingleBook = () => {
    window.location.href = "/RetrieveSingleBook";
  };
  const CreateBookList = () => {
    window.location.href = "/CreateBookList";
  };
  const UpdateBookDetails = () => {
    window.location.href = "/UpdateBookDetails";
  };
  const DeleteAllUserBooks = () => {
    window.location.href = "/DeleteAllUserBooks";
  };
  const DeleteSingleUserBook = () => {
    window.location.href = "/DeleteSingleUserBook";
  };
  const DeleteCreatedUser = () => {
    window.location.href = "/DeleteCreatedUser";
  };
  

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
          <p>ID: {userData.userId}</p>
          <p>Name: {userData.username}</p>
         
          {/* Display other user details */}
          <button onClick={RetrieveAllBooks}>Retrieve All Books</button>
          <button onClick={RetrieveSingleBook}>Retrieve Single Book</button>
          <button onClick={CreateBookList}>Create Book List </button>
          <button onClick={UpdateBookDetails}>Update Book Details</button>
          <button onClick={DeleteAllUserBooks}>Delete All User Book</button>
          <button onClick={DeleteSingleUserBook}>Delete Single User Book</button>
          <button onClick={DeleteCreatedUser}>Delete Created User</button>
         
           </div>
      )}
    </div>
  );
};

export default RetrieveUser;
