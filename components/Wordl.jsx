import { useState } from "react";

export default function useWordl() {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const useWordl = (solution) => {
    const formatGuess = () => {};

    const addNewGuess = () => {};

    const handleKeyup = () => {};
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
}
