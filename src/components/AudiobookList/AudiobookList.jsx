import React, { useState, useEffect } from "react";
import axios from "axios";

function AudiobookList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Define an async function to fetch LibriVox search results
    const fetchLibriVoxData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://librivox.org/api/feed/audiobooks/?format=json&search=${searchTerm}`
        );
        setResults(response.data.books || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from LibriVox API:", error);
        setLoading(false);
      }
    };

    // Fetch data when searchTerm changes
    if (searchTerm) {
      fetchLibriVoxData();
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Audiobooks</h2>
      <input
        type="text"
        placeholder="Search for audiobooks"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AudiobookList;
