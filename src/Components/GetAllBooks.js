import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const RetrieveAllBooks = () => {
  const { authToken } = useContext(AppContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://bookstore.toolsqa.com/BookStore/v1/Books",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setBooks(response.data);
        setError("");
      } catch (error) {
        setError("Error fetching books");
      }
      setLoading(false);
    };

    fetchBooks();
  }, [authToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>All Books</h2>
      {books.map((book) => (
        <div key={book.bookId}>
          <p>Book ID: {book.bookId}</p>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          {/* Display other book details */}
        </div>
      ))}
    </div>
  );
};

export default RetrieveAllBooks;
