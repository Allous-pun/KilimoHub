import React, { useState, useEffect } from "react";
import styles from "./KnowledgeHub.module.css";

const KnowledgeHub = () => {
  // State Hooks
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search term
  const [loading, setLoading] = useState(false); // To manage loading state

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fetch Books using Google Books API
  const fetchBooks = async (query) => {
    if (!query) return; // Don't fetch if search term is empty

    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10`
      );
      const data = await response.json();
      if (data.items) {
        setBooks(data.items); // Set books data
      } else {
        setBooks([]); // Reset books if no data found
        console.log("No books found.");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]); // Reset books on error
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Call the fetchBooks function whenever the search term changes
  useEffect(() => {
    fetchBooks(searchTerm);
  }, [searchTerm]);

  return (
    <div className={styles.knowledgeHubContainer}>
      <header className={styles.header}>
        <h1>KilimoHub Knowledge Center</h1>
        <p>Discover Books</p>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </header>

      <section className={styles.section}>
        <h2>Latest Books and Journals</h2>
        <div className={styles.bookList}>
          {loading ? (
            <p>Loading books...</p>
          ) : (
            books.map((book) => (
              <div key={book.id} className={styles.bookCard}>
                {/* Display book cover image */}
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className={styles.bookImage}
                  />
                )}
                <h3>{book.volumeInfo.title}</h3>
                <p>Author: {book.volumeInfo.authors?.join(", ") || "Unknown"}</p>
                <p>Rating: {book.volumeInfo.averageRating || "No rating"}</p>
                <a
                  href={book.volumeInfo.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info
                </a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default KnowledgeHub;
