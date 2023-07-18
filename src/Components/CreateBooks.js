import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const CreateBookList = () => {
  const { authToken, userId } = useContext(AppContext);
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");

  const handleAddBook = () => {
    setBooks([...books, { isbn: bookName }]);
    setBookName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        userId: userId,
        collectionOfIsbns: books,
      };

      const response = await axios.post(
        "https://bookstore.toolsqa.com/BookStore/v1/Books",
        payload,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("List of Books Created:", response.data);
 
    } catch (error) {
     
      console.error("Failed to create list of books:", error);
    }
  };

  return (
    <div>
      <h2>Create List of Books</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookName"
          placeholder="Book ISBN"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
        <button type="submit">Create Book List</button>
      </form>

      {books.length > 0 && (
        <div>
          <h3>Books added:</h3>
          <ul>
            {books.map((book, index) => (
              <li key={index}>{book.isbn}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateBookList;
