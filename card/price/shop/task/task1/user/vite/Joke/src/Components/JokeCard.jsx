import React, { useState, useEffect } from "react";
import "./JokeCard.css"; 

function JokeCard() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch a random joke
  const fetchJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
      const data = await response.json();
      setJoke(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-card">
      <h2>Random Joke</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {joke && (
        <div className="joke-content">
          <p><strong>Setup:</strong> {joke.setup}</p>
          <p><strong>Punchline:</strong> {joke.punchline}</p>
        </div>
      )}

      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
}

export default JokeCard;
