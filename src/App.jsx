// src/App.js
import React, { useState } from "react";
import "./App.css";
import Quote from "./components/quote";
import quotes from "./data/quotes";

const App = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className="app">
      <Quote quote={quote.quote} author={quote.author} />
      <button onClick={handleNewQuote}>New Quote</button>
    </div>
  );
};

export default App;
