import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";

const RetrieveSingleBook = ({ bookNumber }) => {
  const { authToken } = useContext(AppContext);
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.post(
          "https://bookstore.toolsqa.com/BookStore/v1/Book",
          { bookNumber },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setBookData(response.data);
        setError("");
      } catch (error) {
        setError("Error retrieving book data");
      }
      setLoading(false);
    };

    fetchBook();
  }, [authToken, bookNumber]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      {bookData && (
        <div>
          <p>Book Number: {bookData.bookNumber}</p>
          <p>Title: {bookData.title}</p>
          <p>Author: {bookData.author}</p>
          {/* Display other book details */}
        </div>
      )}
    </div>
  );
};

export default RetrieveSingleBook;
