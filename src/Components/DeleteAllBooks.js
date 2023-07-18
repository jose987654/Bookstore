import React, { useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const DeleteAllUserBooks = () => {
  const { authToken, userId, setBooks } = useContext(AppContext);

  const handleDeleteAllBooks = async () => {
    try {
      const payload = {
        userId: userId,
      };

      const response = await axios.delete(
        "https://bookstore.toolsqa.com/BookStore/v1/Books",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          data: payload, // Note: Use 'data' key for the payload in axios.delete
        }
      );

      console.log("All user books deleted:", response.data);
      setBooks([]); // Clear the books array in the context
      // Handle success and show a success message
    } catch (error) {
      // Handle error and show an error message
      console.error("Failed to delete user books:", error);
    }
  };

  return (
    <div>
      <h2>Delete All User Books</h2>
      <button type="button" onClick={handleDeleteAllBooks}>
        Delete All Books
      </button>
    </div>
  );
};

export default DeleteAllUserBooks;
