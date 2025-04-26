import React, { useEffect, useState } from "react";

const API_URL = "/api/api/fe/wordle-words";

const App = () => {
  const [solution, setSolution] = useState("");
  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(API_URL);
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord);
    };
    fetchWord();
  }, []);

  return <div>{solution}</div>;
};

export default App;
