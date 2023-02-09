import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formatGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    // FInd any green latters
    formatGuess.forEach((l, i) => {
      if (solution[i] === l.key) {
        formatGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    // find yellow
    formatGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formatGuess[i] = "yellow";
        solutionArray[solutionArray.lastIndexOf(l.key)] = null;
      }
    });

    return formatGuess;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formatGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formatGuess;

      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setCurrentGuess("");
  };

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    console.log("key pressed - ", key);

    if (key === "Enter") {
      // Limiting enter to 5x
      if (turn > 5) {
        console.log("Cant guess anymore");
        return;
      }
      // no duplicate word
      if (history.includes(currentGuess)) {
        console.log("Try another word");
        return;
      }
      // checking 5 characters
      if (currentGuess.length !== 5) {
        console.log("Word mush be 5 characters");
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    // delete fuction
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    //type only 5 character's
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
