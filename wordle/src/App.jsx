import React, { useEffect, useState } from "react";
import "./index.css";
const API_URL = "/api/api/fe/wordle-words";
const WORD_LENGTH = 5;

const App = () => {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    const handleType = (event) => {
      setCurrentGuess(currentGuess + event.key);
    };

    window.addEventListener("keydown", handleType);

    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess]);

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(API_URL);
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord);
    };
    fetchWord();
  }, []);

  return (
    <div className="board">
      {guesses.map((guess) => {
        return <Line guess={guess ?? ""} />;
      })}
      {currentGuess}
    </div>
  );
};

function Line({ guess }) {
  const tiles = [];

  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    tiles.push(
      <div key={i} className="tile">
        {char}{" "}
      </div>
    );
  }

  return <div className="line">{tiles}</div>;
}

export default App;
