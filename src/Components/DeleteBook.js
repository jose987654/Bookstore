import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const DeleteSingleUserBook = () => {
  const { authToken, userId, books, setBooks } = useContext(AppContext);
  const [selectedBook, setSelectedBook] = useState("");

  const handleDeleteBook = async () => {
    try {
      const payload = {
        isbn: selectedBook,
        userId: userId,
      };

      const response = await axios.delete(
        `https://bookstore.toolsqa.com/BookStore/v1/Book`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          data: payload,
        }
      );

      console.log("Book deleted:", response.data);
      const updatedBooks = books.filter((book) => book.isbn !== selectedBook);
      setBooks(updatedBooks);
      // Handle success and show a success message
    } catch (error) {
      // Handle error and show an error message
      console.error("Failed to delete book:", error);
    }
  };

  return (
    <div>
      <h2>Delete Single User Book</h2>
      <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
        <option value="">Select a book to delete</option>
        {books.map((book) => (
          <option key={book.isbn} value={book.isbn}>
            {book.title}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleDeleteBook} disabled={!selectedBook}>
        Delete Book
      </button>
    </div>
  );
};

export default DeleteSingleUserBook;
