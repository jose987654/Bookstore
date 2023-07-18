import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const UpdateBookDetails = () => {
  const { authToken, userId, books } = useContext(AppContext);
  const [newIsbn, setNewIsbn] = useState("");
  const [bookToUpdate, setBookToUpdate] = useState(null);

  const handleUpdate = async () => {
    try {
      const payload = {
        userId: userId,
        isbn: newIsbn,
      };

      const response = await axios.put(
        `https://bookstore.toolsqa.com/BookStore/v1/Books/${bookToUpdate.isbn}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("Book details updated:", response.data);
      // Handle success and show a success message
    } catch (error) {
      // Handle error and show an error message
      console.error("Failed to update book details:", error);
    }
  };

  const handleBookSelect = (isbn) => {
    const book = books.find((book) => book.isbn === isbn);
    if (book) {
      setBookToUpdate(book);
    }
  };

  return (
    <div>
      <h2>Update Book Details</h2>
      <div>
        <label htmlFor="oldIsbn">Old ISBN:</label>
        {bookToUpdate && <span>{bookToUpdate.isbn}</span>}
      </div>
      <form>
        <label htmlFor="newIsbn">New ISBN:</label>
        <input
          type="text"
          name="newIsbn"
          value={newIsbn}
          onChange={(e) => setNewIsbn(e.target.value)}
        />
        <button type="button" onClick={handleUpdate}>
          Update Book Details
        </button>
      </form>
      <div>
        <h3>Select Book to Update:</h3>
        <ul>
          {books.map((book) => (
            <li key={book.isbn} onClick={() => handleBookSelect(book.isbn)}>
              {book.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpdateBookDetails;
